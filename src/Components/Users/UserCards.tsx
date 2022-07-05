import React from 'react';
import { IUser } from './IUser';
import { Link } from 'react-router-dom';

const UserCards = (
  {
    users,
    deleteUser
  }: {
    users: IUser[],
    deleteUser: (id?: number) => void
  }) => {
  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
      {users.length && users.map(user =>
        <div className="col" key={user.id}>
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">
                <Link to={`users/${user.id?.toString()}`}>
                  {user.name}
                </Link>
              </h5>
              <p className="card-text">Email: {user.email}</p>
              <p className="card-text">Phone: {user.phone}</p>
              <p className="card-text">Company: {user.company?.name}</p>
            </div>
            <div className="card-footer">
              <small className="text-muted">
                <button
                  className="btn btn-danger"
                  onClick={() => deleteUser(user.id)}
                >
                  Delete
                </button>
              </small>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserCards;