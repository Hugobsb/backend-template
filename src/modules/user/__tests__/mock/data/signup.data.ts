import HttpError from '@app/helpers/errors/http.error';
import {ISignupRequest, ISignupResponse} from '@user/interfaces';

export const signupData = (request: ISignupRequest): ISignupResponse => {
  const {username, password} = request;
  if (!username || !password)
    throw new HttpError('Usuário ou senha necessários.', 401);
  return {
    token: 'blablabla',
  };
};
