import OrderProduct from '@modules/orders/infra/typeorm/entities/OrderProduct';
import { injectable, inject } from 'tsyringe';
import AppError from '@shared/errors/AppError';
import ISalesProductsRepository from '../repositories/ISalesProductsRepository';

/* interface IRequest {
  id: string;
} */

interface IRequestDTO {
  user_id: string;
  id: string;
  status: number;
}

@injectable()
export default class UpdateStatusProductSaleService {
  constructor(
    @inject('SalesProductsRepository')
    private salesProductsRepository: ISalesProductsRepository
  ) {}

  public async execute({
    user_id,
    id,
    status,
  }: IRequestDTO): Promise<OrderProduct> {
    const orderProduct = await this.salesProductsRepository.findById(id);

    if (!orderProduct) {
      throw new AppError('Venda - produto não encontrado.');
    }

    if (orderProduct.produto.id_usuario !== user_id) {
      throw new AppError('Você não pode alterar esse venda - produto');
    }

    orderProduct.status = status;

    return this.salesProductsRepository.save(orderProduct);
  }
}
