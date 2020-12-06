import { container } from 'tsyringe';

import IProductsRepository from '@modules/products/repositories/IProductsRepository';
import ProductsRepository from '@modules/products/infra/typeorm/repositories/ProductsRepository';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';
import IOrdersRepository from '@modules/orders/repositories/IOrdersRepository';
import ISalesRepository from '@modules/orders/repositories/ISalesRepository';
import OrdersRepository from '@modules/orders/infra/typeorm/repositories/OrdersRepository';
import SalesRepository from '@modules/orders/infra/typeorm/repositories/SalesRepository';
import ISalesProductsRepository from '@modules/orders/repositories/ISalesProductsRepository';
import SalesProductsRepository from '@modules/orders/infra/typeorm/repositories/SalesProductsRepository';

// <IProductsRepository> garante que o tipo de ProductsRepository seja do IProductsRepository
container.registerSingleton<IProductsRepository>(
  'ProductsRepository',
  ProductsRepository
);

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository
);

container.registerSingleton<IOrdersRepository>(
  'OrdersRepository',
  OrdersRepository
);

container.registerSingleton<ISalesRepository>(
  'SalesRepository',
  SalesRepository
);

container.registerSingleton<ISalesProductsRepository>(
  'SalesProductsRepository',
  SalesProductsRepository
);
