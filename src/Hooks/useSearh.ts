import { IUser } from '../Components/Users/IUser';
import { useMemo } from 'react';

export const useSearch = (array: IUser[], search: string) => {
  const searchedUser = useMemo(() => {
    if (search) {
      return array.filter((user) => user.name.toLowerCase().includes(search.toLowerCase()));
    }
    return array;
  }, [search, array]);
  return searchedUser;
};