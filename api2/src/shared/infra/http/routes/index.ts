import { Router } from 'express';

import productsRouter from '@modules/products/infra/http/routes/products.routes';
import usersRouter from '@modules/users/infra/http/routes/users.routes';
import sessionsRouter from '@modules/users/infra/http/routes/sessions.routes';
import profileRouter from '@modules/users/infra/http/routes/profile.routes';
import orderRouter from '@modules/orders/infra/http/routes/orders.routes';
import salesRouter from '@modules/orders/infra/http/routes/sales.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/products', productsRouter);
routes.use('/profile', profileRouter);
routes.use('/order', orderRouter);
routes.use('/sales', salesRouter);

export default routes;
