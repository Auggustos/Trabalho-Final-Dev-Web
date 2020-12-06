import Order from '@modules/orders/infra/typeorm/entities/Order';
import { injectable, inject } from 'tsyringe';
import IOrdersRepository from '../repositories/IOrdersRepository';

@injectable()
class ListOrdersService {
  constructor(
    @inject('OrdersRepository')
    private ordersRepository: IOrdersRepository
  ) {}

  public async execute(id: string): Promise<Order[] | undefined> {
    const orders = await this.ordersRepository.findAll(id);

    return orders;
  }
}

export default ListOrdersService;
