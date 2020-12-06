import Order from '../infra/typeorm/entities/Order';
// - findByUser
// - createAndSave
export default interface ISalesRepository {
  findAll(id: string): Promise<Order[]>;
}
