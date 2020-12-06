import OrderProduct from '../infra/typeorm/entities/OrderProduct';

export default interface ISalesProductsRepository {
  findById(id: string): Promise<OrderProduct | undefined>;
  save(orderProduct: OrderProduct): Promise<OrderProduct>;
}
