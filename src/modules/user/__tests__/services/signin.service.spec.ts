import {SigninService} from '@user/services/signin.service';
import {ExampleMockRepository} from '../mock/repository/example.mock';

const exampleMockRepository = new ExampleMockRepository();
const signinService = new SigninService(exampleMockRepository);

describe('Signin Service', () => {
  test('Deve retornar um token', async () => {
    const response = await signinService.execute({
      username: 'imhugosz@gmail.com',
      password: 'Teste123#',
    });

    expect(response).toHaveProperty('token');
  });

  test('Deve retornar o status 401, pois a senha esta incorreta', async () => {
    await signinService
      .execute({
        username: 'imhugosz@gmail.com',
        password: 'Teste12#',
      })
      .catch((err) => {
        expect(err).toHaveProperty('status', 401);
        expect(err).toHaveProperty('message', 'Usuário ou senha incorretos.');
      });
  });
});
