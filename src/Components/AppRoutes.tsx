import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import Users from '../Pages/Users';
import Posts from '../Pages/Posts';
import User from '../Pages/User';
import Context from '../Context/context';

const AppRoutes = () => {
  const { isAuth } = useContext(Context);
  return (
    isAuth
      ?
      <Routes>
        <Route path='users' element={<Users/>}/>
        <Route path='users/:id' element={<User/>}/>
        <Route path='posts' element={<Posts/>}/>
        <Route path='*' element={<Users/>}/>
      </Routes>
      :
      <Routes>
        <Route path='posts' element={<Posts/>}/>
        <Route path='*' element={<Posts/>}/>
      </Routes>
  );
};

export default AppRoutes;