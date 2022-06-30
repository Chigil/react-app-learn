import { Dispatch, SetStateAction } from 'react';

export interface IAuth {
  isAuth: boolean,
  setIsAuth: Dispatch<SetStateAction<boolean>>
}