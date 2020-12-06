import Order from '@modules/orders/infra/typeorm/entities/Order';
import { injectable, inject } from 'tsyringe';
import ISalesRepository from '../repositories/ISalesRepository';

@injectable()
class ListOrdersService {
  constructor(
    @inject('SalesRepository')
    private salesRepository: ISalesRepository
  ) {}

  public async execute(id: string): Promise<Order[] | undefined> {
    const orders = await this.salesRepository.findAll(id);
    return orders;
  }
}

export default ListOrdersService;
