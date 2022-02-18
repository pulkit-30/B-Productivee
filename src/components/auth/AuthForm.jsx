import React, { useContext, useRef, useState } from 'react';
import Flex from '../ui/flex/Flex';
import Button from '../ui/Button/Button';
import Classes from './AuthForm.module.css';
import { useNavigate } from 'react-router-dom';
import Loader from '../loader/Loader';
import { SignUp, SignIn } from '../../Api/User';
import MessageContext from '../../context/Message/MessageContext';
import { setData } from '../../Api/Database';
function AuthForm(props) {
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();
  const Message = useContext(MessageContext);
  const email = useRef();
  const password = useRef();
  const HandelSubmit = async (event) => {
    //Show Loader
    setLoading(true);
    //prevent Page from refreshing
    event.preventDefault();
    //User data
    const data = {
      email: email.current.value,
      password: password.current.value,
      isSignUp: props.isSignUp,
    };


    //SignUp
    props.isSignUp &&
      SignUp(data)
        .then((res) => {
          setData({ collection: 'users', id: res.user.uid, data: {
            id: res.user.uid,
            name: '',
            email:email.current.value,
            image: null ,
            mobile: 0,
            fcmToken: '',
          } })
          .then(() => {
            Message.ThrowMessage('Sign Up successfully');
            setLoading(false);
            navigate('/');
          })
          .catch((error) => {
            setLoading(false);
            Message.ThrowMessage(error);
          });
          Message.ThrowMessage('SignUp SuccessFully');
        })
        .catch((err) => {
          Message.ThrowMessage('Cannot Register Your Account');
          setLoading(false);
        });

    //SignIn
    !props.isSignUp &&
      SignIn(data)
        .then((res) => {
          Message.ThrowMessage('SignIn SuccessFully');
          setLoading(false);
          navigate('/');
        })
        .catch((err) => {
          Message.ThrowMessage('Cannot LoggedIn Your Account');
          setLoading(false);
        });
       
  };

  return (
    <Flex className={Classes.Form + ' f-center column'}>
      <Flex className={'column ' + Classes.Form_Top}>
        <h1>{props.isSignUp ? 'SignUp' : 'Sign In'}</h1>
        <p>
          {props.isSignUp
            ? 'Enter your name,Email-id, and Password to register with us'
            : 'Enter your Email-id, and Password to LogIn with us'}
        </p>
      </Flex>
      <form onSubmit={HandelSubmit} className={Classes.Form_Box}>
        <Flex className='column f-start'>
          <React.Fragment>
            <label htmlFor='email'>Email</label>
            <input type='email' ref={email} placeholder='Email' id='email' />
          </React.Fragment>
          <React.Fragment>
            <label htmlFor='password'>Password</label>
            <input
              type='text'
              ref={password}
              placeholder='Password'
              id='password'
            />
          </React.Fragment>
          {isLoading && <Loader />}
          {!isLoading && (
            <Button>{props.isSignUp ? 'SignUp' : 'Sign In'}</Button>
          )}
        </Flex>
      </form>
    </Flex>
  );
}

export default AuthForm;
