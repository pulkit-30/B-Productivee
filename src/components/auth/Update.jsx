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
function Update(props) {
  const navigate = useNavigate();
  const Message = useContext(MessageContext);
  const [isLoading, setLoading] = useState(false);
  const [imageFile, updateImage] = useState(props.AuthUser?.image || null);
  const [name, setName] = useState(props.AuthUser?.name);
  const [Mobile, setMobile] = useState(props.AuthUser.mobile);
  // const uploadTask = () => {
  //   StoreImage({ file: imageFile });
  // };
  const HandelSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // imageFile && uploadTask(); //upload profile photo and store it on firebase storage
    const data = {
      id: props.AuthUser.id,
      name: name || props.AuthUser.name,
      email: props.AuthUser.email,
      image: props.AuthUser.image || '',
      mobile: parseInt(Mobile) || props.AuthUser.mobile,
      fcmToken: '',
    };
    UpdateUser({
      displayName: name || props.AuthUser?.name,
      photoURL: null || props.AuthUser?.image,
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
  };  

  return (
    <Flex className={Classes.Form + ' f-center column'}>
      <form onSubmit={HandelSubmit} className={Classes.Form_Box}>
        <Flex className='column f-start form_flex'>
          <React.Fragment>
            <label htmlFor='profileImage'>
              <ProfilePicture
                image={
                  imageFile||
                  props.AuthUser?.image ||
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
