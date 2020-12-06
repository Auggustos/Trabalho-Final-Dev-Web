import OrderProduct from '@modules/orders/infra/typeorm/entities/OrderProduct';
import { injectable, inject } from 'tsyringe';
import Order from '../infra/typeorm/entities/Order';
import IOrdersRepository from '../repositories/IOrdersRepository';

interface IRequest {
  id_usuario: string;
  status: number;
  pedido_produtos: OrderProduct[];
  valor_produtos: number;
  endereco_entrega: string;
}

@injectable()
class CreateOrderService {
  constructor(
    @inject('OrdersRepository')
    private ordersRepository: IOrdersRepository
  ) {}

  public async execute({
    id_usuario,
    status,
    pedido_produtos,
    valor_produtos,
    endereco_entrega,
  }: IRequest): Promise<Order> {
    const order = await this.ordersRepository.create({
      id_usuario,
      status,
      pedido_produtos,
      valor_final: valor_produtos,
      valor_produtos,
      endereco_entrega,
    });

    await this.ordersRepository.save(order);

    return order;
  }
}

export default CreateOrderService;
