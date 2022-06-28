import React from 'react';
import { useParams } from 'react-router-dom';

const User = () => {
  const {id} = useParams();
  console.log(id);
  //useEffect(fetch user on id in get request)
  //getUser()
  //render user
  return (
    <div>
      
    </div>
  );
};

export default User;