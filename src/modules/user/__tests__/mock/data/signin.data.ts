import HttpError from '@app/helpers/errors/http.error';
import {ISigninRequest, ISigninResponse} from '@user/interfaces';

export const signinData = (request: ISigninRequest): ISigninResponse => {
  const {username, password} = request;

  if (!username || !password)
    throw new HttpError('Usuário ou senha incorretos.', 401);
  return {
    token: `blablabla`,
  };
};
