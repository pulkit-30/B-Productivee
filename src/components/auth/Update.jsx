import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { setData } from '../../Api/Database';
import { StoreImage } from '../../Api/Storage';
import { UpdateUser } from '../../Api/User';
import MessageContext from '../../context/Message/MessageContext';
import Loader from '../loader/Loader';
import Button from '../ui/Button/Button';
import Flex from '../ui/flex/Flex';
import ProfilePicture from '../User/ProfilePicture';
import Classes from './AuthForm.module.css';
import {storage} from '../../firebase'
function Update(props) {
  const navigate = useNavigate();
  const Message = useContext(MessageContext);
  const [isLoading, setLoading] = useState(false);
  const [imageFile, updateImage] = useState(null);
  const [url,seturl]=useState('')
  const [name, setName] = useState(props.AuthUser?.name);
  const [Mobile, setMobile] = useState(props.AuthUser.mobile);
const UpdateTask =(imageurl)=>{
  const data = {
    id: props.AuthUser.id,
    name: name || props.AuthUser.name,
    email: props.AuthUser.email,
    image: imageurl || props.AuthUser.image ,
    mobile: parseInt(Mobile) || props.AuthUser.mobile,
    fcmToken: '',
  };
  UpdateUser({
    displayName: name || props.AuthUser?.name,
    photoURL: url || props.AuthUser?.image,
    phoneNumber: parseInt(Mobile) || props.AuthUser.mobile,
  })
    .then(() => {
      setData({ collection: 'users', id: props.AuthUser?.id, data: data })
        .then(() => {
          setLoading(false);
          navigate('/');
          Message.ThrowMessage('profileUpdatedSuccessfully');
        })
        .catch((error) => {
          setLoading(false);
          Message.ThrowMessage(error);
        });
    })
    .catch((err) => Message.ThrowMessage(err));
} 
 const uploadTask = () => {
      // const imageUploadTaskStoreImage = ({ file: imageFile });
    const metadata = {
      contentType: 'image/png',
    };
  
    // Upload file and metadata to the object 'images/mountains.jpg'
    const storageRef = ref(storage, imageFile.name);
    const uploadTask = uploadBytesResumable(storageRef, imageFile, metadata);
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        // const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        // console.log("Upload is " + progress + "% done");
        // console.log(snapshot);
      },
      (error) => {
        console.log(error);
      },
      () => {
        // Upload completed successfully, now we can get the download URL
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          UpdateTask(downloadURL);
        });
      }
    );
  };
  const HandelSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    imageFile && uploadTask(); //upload profile photo and store it on firebase storage
    !imageFile&&UpdateTask(null);
  };


  return (
    <Flex className={Classes.Form + ' f-center column'}>
      <form onSubmit={HandelSubmit} className={Classes.Form_Box}>
        <Flex className='column f-start form_flex'>
          <React.Fragment>
            <label htmlFor='profileImage'>
              <ProfilePicture
                image={
                  (imageFile && URL.createObjectURL(imageFile))||
                  (props.AuthUser?.image) ||
                  null
                }
              />
            </label>
            <input
              type='file'
              id='profileImage'
              style={{ display: 'none' }}
              onChange={(e) => {
                updateImage(e.target.files[0]);
              }}
            />
          </React.Fragment>
          <br />
          <br />
          <React.Fragment>
            <label htmlFor='name'>Name</label>
            <input
              type='text'
              value={name}
              placeholder='Name'
              id='name'
              defaultValue={props.AuthUser.name}
              onChange={(e) => setName(e.target.value)}
            />
          </React.Fragment>
          <React.Fragment>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              placeholder='Email'
              id='email'
              value={props.AuthUser?.email}
              onChange={() => {
                Message.ThrowMessage('You cannot Change your email');
              }}
            />
          </React.Fragment>
          <React.Fragment>
            <label htmlFor='mobile'>Mobile</label>
            <input
              type='tel'
              value={Mobile}
              placeholder='Mobile'
              id='mobile'
              defaultValue={props.AuthUser.Mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
          </React.Fragment>
          {isLoading && <Loader />}
          {!isLoading && <Button>Update Profile</Button>}
        </Flex>
      </form>
    </Flex>
  );
}

export default Update;
