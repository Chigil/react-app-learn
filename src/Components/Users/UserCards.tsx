import React from 'react';
import { USERS } from './users';

const UserCards = () => {
  return (
    <div className="container mt-5">
      <h1 className="mb-5">Users</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {USERS.map(user =>
          <div className="col">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{user.name}</h5>
                <p className="card-text">Email: {user.email}</p>
                <p className="card-text">Phone: {user.phone}</p>
              </div>
              <div className="card-footer">
                <small className="text-muted">ACTION</small>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserCards;