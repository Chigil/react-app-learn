import React, { Dispatch, SetStateAction } from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ setOpenModal }: { setOpenModal: Dispatch<SetStateAction<boolean>> }) => {
  return (
    <nav className="navbar navbar-expand-lg  navbar-dark bg-dark">
      <div className="container-fluid">
        <ul className="navbar-nav w-100 mb-2 mb-lg-0">
          <li className="nav-item">
            <Link to='users' className="nav-link active" aria-current="page">Users</Link>
          </li>
          <li className="nav-item">
            <Link to='posts' className="nav-link">Posts</Link>
          </li>
        </ul>
        <button className="btn btn-primary" onClick={() => setOpenModal(true)}>Login</button>
      </div>
    </nav>
  );
};

export default NavBar;