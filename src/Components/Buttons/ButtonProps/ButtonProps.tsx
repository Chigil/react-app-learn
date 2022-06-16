import React, { Dispatch, SetStateAction } from 'react';
import './ButtonProps.css';

interface ButtonProps {
  children: string;
  color: string;
  setText: Dispatch<SetStateAction<string>>;
}

const ButtonProps = ({children, color, setText}:ButtonProps) => {
  console.log(setText);
  return (
      <button onClick={() => setText('Do you click me?')} className={color}>{children}</button>
  );
};

export default ButtonProps;