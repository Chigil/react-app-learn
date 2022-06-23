import React, { ChangeEvent, FormEvent, useMemo, useState } from 'react';
import { IUser } from './IUser';
import http from '../../http';

const initialValue: IUser = {
  name: '',
  username: '',
  email: '',
  phone: '',
  website: ''
};

const UserCards = () => {
  const [showUserForm, setShowUserForm] = useState(false);
  const [users, setUsers] = useState<IUser[]>([]);
  const [value, setValue] = useState<IUser>(initialValue);
  const [search, setSearch] = useState('');

  const searchedUser = useMemo(() => {
    if (search) {
      return users.filter((user) => user.name.toLowerCase().includes(search.toLowerCase()));
    }
    return users;
  }, [search, users]);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const field = event.target.id;
    setValue({ ...value, [field]: event.target.value });
  };

  const getUsers = async () => {
    http.get('users').then(res => {
      setUsers(res.data);
    }).catch(err => console.log(err));
    // const users:{ data: IUser[]} = await http.get('users');
    // setUsers(users.data);
  };

  const addUser = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setUsers([...users, value]);
    setValue(initialValue);
  };

  const deleteUser = (id?: number) => {
    const isDelete = confirm('Really delete this user?');
    if (isDelete) {
      setUsers(users.filter(user => user.id !== id));
    }
  };

  return (
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
      <button className="btn btn-primary mb-5 mx-5" onClick={() => getUsers()}>Fetch user</button>
      <button className="btn btn-success mb-5" onClick={() => setShowUserForm(!showUserForm)}>Add user</button>
      {
        showUserForm &&
        <form className="col-3 mb-3" onSubmit={(event) => addUser(event)}>
          {Object.keys(initialValue).map(field =>
            <div className="mb-3" key={field}>
              <label htmlFor={field} className="form-label">{field}</label>
              <input type="text"
                     className="form-control"
                     placeholder={`Input user ${field}`}
                     id={field}
                     value={value[field as keyof Omit<IUser, 'id' | 'address' | 'company'>]}
                     onChange={(event) => onChange(event)}
              />
            </div>
          )}
          <button type="submit" className="btn btn-primary">Save</button>
        </form>
      }
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {searchedUser.map(user =>
          <div className="col" key={user.id}>
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{user.name}</h5>
                <p className="card-text">Email: {user.email}</p>
                <p className="card-text">Phone: {user.phone}</p>
                <p className="card-text">Company: {user.company?.name}</p>
              </div>
              <div className="card-footer">
                <small className="text-muted">
                  <button className="btn btn-danger" onClick={() => deleteUser(user.id)}>Delete</button>
                </small>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserCards;