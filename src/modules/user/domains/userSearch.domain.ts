// import {someInterface} from '../interfaces';

export function searchForUser(
  userData: {name: string; id: string}[],
  id: string,
) {
  return userData.find(({id: userId}) => userId === id);
}
