import { NextFunction, Request, Response, Router } from 'express';

const routes = Router();

routes.get('/', (req: Request, resp: Response, next: NextFunction) => {
  return resp.json({ message: 'HELLO DEV!' });
});


export default routes;
