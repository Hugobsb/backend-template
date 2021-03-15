import {ISigninRequest, ISigninResponse} from '../signin';
import {ISignupRequest, ISignupResponse} from '../signup';

export interface IExampleRepository {
  signin(request: ISigninRequest): Promise<ISigninResponse | never>;

  signup(request: ISignupRequest): Promise<ISignupResponse | never>;
}
