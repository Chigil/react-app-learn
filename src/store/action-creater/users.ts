import { Dispatch } from 'redux';
import { UserActionType, UsersAction } from '../types/users';
import http from '../../http';

export const getUsers = () => {
  return async (dispatch: Dispatch<UsersAction>) => {
    const response = await http.get('users');
    dispatch({ type: UserActionType.GET_USERS, payload: response.data });
  };
};
