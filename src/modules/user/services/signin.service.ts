import {Service} from 'typedi';
import {IService} from '@app/interfaces/service.interface';

import {ExampleRepository} from '../repositories/example.repository';

import {ISigninRequest} from '../interfaces';

@Service()
export class SigninService implements IService {
  constructor(private readonly exampleRepository: ExampleRepository) {}

  execute(request: ISigninRequest) {
    return this.exampleRepository.signin(request);
  }
}
