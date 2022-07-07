import { UserActionType, UsersAction, UsersState } from '../types/users';

const initialState: UsersState = {
  users: []
};

export const usersReducer = (state = initialState, action: UsersAction): UsersState => {
  switch (action.type) {
    case UserActionType.GET_USERS:
      return { users: action.payload };
    default:
      return state;
  }
};