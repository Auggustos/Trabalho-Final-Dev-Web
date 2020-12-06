import { Router } from 'express';

import ensureAuhenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import SalesController from '../controllers/SalesController';
import ProductSaleStatusController from '../controllers/ProductSaleStatusController';

const salesRouter = Router();
const salesController = new SalesController();
const productSalesStatusController = new ProductSaleStatusController();

salesRouter.use(ensureAuhenticated);
salesRouter.get('/', salesController.index);
salesRouter.put('/', productSalesStatusController.update);

export default salesRouter;
