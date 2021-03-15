import {Service} from 'typedi';
import axios, {AxiosError, AxiosInstance, AxiosResponse} from 'axios';

import IEnvironment from '@app/interfaces/enviroment.interface';
import {
  IExampleRepository,
  ISigninRequest,
  ISigninResponse,
  ISignupRequest,
  ISignupResponse,
} from '@user/interfaces';
import endpoints from '@app/helpers/constants/endpoints.constant';
import HttpError from '@app/helpers/errors/http.error';

@Service()
export class ExampleRepository implements IExampleRepository {
  readonly apiExample: AxiosInstance;

  constructor() {
    this.apiExample = axios.create({
      baseURL:
        endpoints.exampleEnvironments[
          (process.env.ENV as IEnvironment) ?? 'homol'
        ],
    });
  }

  public async signin(request: ISigninRequest) {
    const {username, password} = request;

    const axiosResponse: AxiosResponse<ISigninResponse> = await this.apiExample
      .post('/login', {username, password})
      .catch(ExampleRepository.handleError);
    const response = axiosResponse.data;

    return response;
  }

  public async signup(request: ISignupRequest) {
    const axiosResponse: AxiosResponse<ISignupResponse> = await this.apiExample
      .post('/register', request)
      .catch(ExampleRepository.handleError);

    const response = axiosResponse.data;

    return response;
  }

  private static handleError(err: AxiosError): never {
    if (err?.response?.data?.message) {
      throw new HttpError(err?.response?.data?.message, err?.response?.status);
    } else {
      throw new HttpError(err.message, Number(err.code || 500));
    }
  }
}
