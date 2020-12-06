import ICreateOrderDTO from '../dtos/ICreateOrderDTO';
import Order from '../infra/typeorm/entities/Order';
// - findByUser
// - createAndSave
export default interface IOrdersRepository {
  findAll(id: string): Promise<Order[]>;
  findById(id: string): Promise<Order | undefined>;
  create(data: ICreateOrderDTO): Promise<Order>;
  save(order: Order): Promise<Order>;
  delete(order: Order): Promise<Order>;
}
