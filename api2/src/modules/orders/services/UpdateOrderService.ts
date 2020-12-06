import Order from '@modules/orders/infra/typeorm/entities/Order';
import { injectable, inject } from 'tsyringe';
import AppError from '@shared/errors/AppError';
import { stat } from 'fs';
import IOrdersRepository from '../repositories/IOrdersRepository';

/* interface IRequest {
  id: string;
} */

interface IRequestDTO {
  user_id: string;
  id: string;
  status: number;
}

@injectable()
export default class UpdateProductService {
  constructor(
    @inject('OrdersRepository')
    private ordersRepository: IOrdersRepository
  ) {}

  public async execute({ user_id, id, status }: IRequestDTO): Promise<Order> {
    const order = await this.ordersRepository.findById(id);

    if (!order) {
      throw new AppError('Produto não encontrado.');
    }

    if (order.id_usuario !== user_id) {
      throw new AppError('Você não pode atualizar esse produto');
    }

    order.status = status;

    return this.ordersRepository.save(order);
  }
}
