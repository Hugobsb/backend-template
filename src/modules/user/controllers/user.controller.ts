import {Container} from 'typedi';
import {Request, Response} from 'express';

import {SigninService, SignupService} from '@user/services';

const signinService = Container.get(SigninService);
const signupService = Container.get(SignupService);

export async function signin(req: Request, res: Response) {
  try {
    const {username, password} = req.body;
    const response = await signinService.execute({username, password});

    return res.status(200).json(response);
  } catch (err) {
    return res.status(err?.status || 500).json(err);
  }
}

export async function signup(req: Request, res: Response) {
  try {
    const {username, password} = req.body;
    const response = await signupService.execute({username, password});

    return res.status(200).json(response);
  } catch (err) {
    return res.status(err?.status || 500).json(err);
  }
}
