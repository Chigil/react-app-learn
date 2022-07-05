import React, { Dispatch, SetStateAction, useContext } from 'react';
import { Link } from 'react-router-dom';
import Context from '../../Context/context';

const NavBar = ({ setOpenModal }: { setOpenModal: Dispatch<SetStateAction<boolean>> }) => {
  const { isAuth, setIsAuth } = useContext(Context);

  const logout = () => {
    localStorage.clear();
    setIsAuth(false);
  };

  return (
    <nav className="navbar navbar-expand-lg  navbar-dark bg-dark">
      <div className="container-fluid">
        {isAuth
          ?
          <>
            <ul className="navbar-nav w-100 mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to='users' className="nav-link active" aria-current="page">Users</Link>
              </li>
              <li className='nav-item'>
                <Link to='posts' className='nav-link'>Posts</Link>
              </li>
            </ul>
            <button className="btn btn-primary" onClick={() => logout()}>Logout</button>
          </>
          :
          <>
            <ul>
              <li className="nav-item">
                <Link to='posts' className="nav-link">Posts</Link>
              </li>
            </ul>
            <button className="btn btn-primary" onClick={() => setOpenModal(true)}>Login</button>
          </>
        }
      </div>
      </nav>
  );
};

        export default NavBar;