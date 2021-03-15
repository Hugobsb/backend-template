import joi from 'joi';
import {Request, Response, NextFunction} from 'express';
import HttpError from '@app/helpers/errors/http.error';

export async function signupValidator(
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<Response | any> {
  try {
    const bodyValidate = joi.object({
      username: joi.string().min(3).required(),
      password: joi.string().min(3).required(),
    });

    if (!req.body) throw new HttpError('Body is required', 400);

    const {error} = bodyValidate.validate(req.body);
    const hasError = Boolean(error?.message);

    if (hasError) throw new HttpError(error?.message ?? 'Bad Request', 400);

    return next();
  } catch (err: any) {
    return res.status(err.status ?? 404).json(err);
  }
}
