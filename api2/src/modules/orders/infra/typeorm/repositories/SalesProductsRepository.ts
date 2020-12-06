import { getRepository, Repository } from 'typeorm';
import OrderProduct from '@modules/orders/infra/typeorm/entities/OrderProduct';

import ISalesProductsRepository from '@modules/orders/repositories/ISalesProductsRepository';
import AppError from '@shared/errors/AppError';

class SalesProductsRepository implements ISalesProductsRepository {
  private ormRepository: Repository<OrderProduct>;

  constructor() {
    this.ormRepository = getRepository(OrderProduct);
  }

  public async findById(id: string): Promise<OrderProduct | undefined> {
    const orderProduct = await this.ormRepository.findOne({
      where: { id },
      join: {
        alias: 'pedido_produtos',
        innerJoinAndSelect: {
          produto: 'pedido_produtos.produto',
        },
      },
    });

    if (!orderProduct) {
      throw new AppError('Venda - produto não encontrado', 404);
    }

    return orderProduct;
  }

  public async save(orderProduct: OrderProduct): Promise<OrderProduct> {
    return this.ormRepository.save(orderProduct);
  }
}

export default SalesProductsRepository;
