import {
  IExampleRepository,
  ISigninResponse,
  ISigninRequest,
  ISignupRequest,
  ISignupResponse,
} from '@user/interfaces';

import {signinData} from '../data/signin.data';
import {signupData} from '../data/signup.data';

export class ExampleMockRepository implements IExampleRepository {
  readonly apiExample: any;

  public async signin(request: ISigninRequest): Promise<ISigninResponse> {
    return signinData(request);
  }

  public async signup(request: ISignupRequest): Promise<ISignupResponse> {
    return signupData(request);
  }
}
