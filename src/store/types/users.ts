export interface UsersState {
  users: any[];
}

export enum UserActionType {
  GET_USERS = 'GET_USERS',
}

interface GetUsersAction {
  type: UserActionType.GET_USERS
  payload: any[];
}


export type UsersAction = GetUsersAction