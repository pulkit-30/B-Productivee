import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AuthPage from './pages/AuthPage';
import ProfilePage from './pages/ProfilePage';
import Board from './components/board/Board';
import Error from './pages/Error';
import UpdateProfile from './pages/UpdateProfile';
import BoardPage from './pages/BoardPage';
function App_Routes(props) {
  const AuthUser = props.AuthUser;
  const isUser = props.isUser;
  return (
    <Routes>
      <Route
        path='/'
        element={
          isUser && AuthUser ? (
            <BoardPage AuthUser={AuthUser} isUser={isUser} />
          ) : (
            <HomePage />
          )
        }
      />
      <Route
        path='/:id'
        element={
          isUser && AuthUser ? (
            <BoardPage AuthUser={AuthUser} isUser={isUser} />
          ) : (
            <HomePage />
          )
        }
      />
      <Route path='/Auth/:type' element={<AuthPage />} />
      <Route
        path='/Profile/:id'
        element={<ProfilePage AuthUser={AuthUser} isUser={isUser} />}
      />

      <Route
        path='/update/:id'
        element={<UpdateProfile AuthUser={AuthUser} isUser={isUser} />}
      />
      <Route path='*' element={<Error AuthUser={AuthUser} isUser={isUser} />} />
    </Routes>
  );
}

export default App_Routes;
