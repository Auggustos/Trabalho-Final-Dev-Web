import { Router } from 'express';
import multer from 'multer';

import uploadConfig from '@config/upload';

import ensureAuhenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import { container } from 'tsyringe';
import ProductsController from '../controllers/ProductsController';

const productsRouter = Router();
const upload = multer(uploadConfig);
const productsController = new ProductsController();
productsRouter.post(
  '/',
  ensureAuhenticated,
  upload.single('imagem'),
  productsController.create
);

productsRouter.get('/', productsController.index);
productsRouter.get('/:id', productsController.show);
productsRouter.put('/', ensureAuhenticated, productsController.update);
productsRouter.delete('/:id', ensureAuhenticated, productsController.delete);

export default productsRouter;
