import { combineReducers } from 'redux';
import { usersReducer } from './usersReducer';

export const rootReducer = combineReducers({
  users: usersReducer
});

export type RootState = ReturnType<typeof rootReducer>