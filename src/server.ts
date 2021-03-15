/* eslint-disable no-console */
/* eslint-disable import/order */

import {app} from './config/express.config';

import logMiddleware from './middlewares/log.middleware';

import {userRouter} from '@user/user.routes';

const PORT = process.env.PORT || 3000;

app.use(logMiddleware);

app.get('/', (_, res) => res.json({status: 'Ok'}));

app.use('/user', userRouter);

app.listen(3000, () => {
  console.clear();
  console.log('\n Starting server...');

  console.log(
    `${'\x1b[31m server.js \x1b[0m listening to port \x1b[33m'}${PORT}\x1b[0m`,
  );
  console.log(`\x1b[96m http://localhost:${PORT}\x1b[0m`);
  console.log('\n /**logs**/\n');
});
