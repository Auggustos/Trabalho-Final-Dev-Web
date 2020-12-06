import { Router } from 'express';

import ensureAuhenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import OrdersController from '../controllers/OrdersController';

const ordersRouter = Router();
const ordersController = new OrdersController();

ordersRouter.use(ensureAuhenticated);
ordersRouter.post('/', ordersController.create);
ordersRouter.get('/', ordersController.index);
ordersRouter.get('/:id', ordersController.show);
ordersRouter.put('/', ordersController.update);

export default ordersRouter;
