import {Router} from 'express';

import {signin, signup} from './controllers';
import {signinValidator, signupValidator} from './helpers/validators';

const userRouter = Router();

userRouter.post('/signin', signinValidator, signin);
userRouter.post('/signup', signupValidator, signup);

export {userRouter};
