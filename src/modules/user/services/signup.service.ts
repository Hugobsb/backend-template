import {Service} from 'typedi';

import {IService} from '@app/interfaces/service.interface';

import {ExampleRepository} from '../repositories/example.repository';
import {ISignupRequest} from '../interfaces';

@Service()
export class SignupService implements IService {
  constructor(private readonly exampleRepository: ExampleRepository) {}

  execute(request: ISignupRequest) {
    return this.exampleRepository.signup(request);
  }
}
