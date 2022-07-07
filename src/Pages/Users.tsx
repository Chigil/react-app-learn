import React, { useEffect, useState } from 'react';
import UserCards from '../Components/Users/UserCards';
import Spinner from '../Components/Spinner/Spinner';
import { useSearch } from '../Hooks/useSearh';
import { getUsers } from '../store/action-creater/users';
import { useActions } from '../Hooks/useActions';
import { useTypedSelector } from '../Hooks/useTypedSelectors';

const Users = () => {
  const [showUserForm, setShowUserForm] = useState(false);
  const [search, setSearch] = useState('');
  const { users } = useTypedSelector(state => state.users)
  const searchedUsers = useSearch(users, search);
  const { getUsers } = useActions();
  //1. take out search component

  useEffect(() => {
    getUsers()
  }, []);

  // const deleteUser = (id?: number) => {
  //   const isDelete = confirm('Really delete this user?');
  //   if (isDelete) {
  //     setUsers(users.filter(user => user.id !== id));
  //   }
  // };

  return (
    <>
      <div className="container mt-5">
        <h1 className="mb-5">Users</h1>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">Search</span>
          <input type="text"
                 className="form-control"
                 placeholder="Name"
                 onChange={(event) => setSearch(event.target.value)}
          />
        </div>
        <button className="btn btn-success mb-5" onClick={() => setShowUserForm(!showUserForm)}>Add user</button>
        {/*{showUserForm && <AddUser users={users} setUsers={setUsers}/>}*/}
      </div>
      {
        users.length
          ?
          <UserCards users={searchedUsers} />
          :
          <Spinner/>
      }
    </>
  );
};

export default Users;