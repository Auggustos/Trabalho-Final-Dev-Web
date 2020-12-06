import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';
import IProductsRepository from '../repositories/IProductsRepository';
import Product from '../infra/typeorm/entities/Product';

interface IRequestDTO {
  user_id: string;
  id: string;
}

@injectable()
export default class SoftDeleteProductService {
  constructor(
    @inject('ProductsRepository')
    private productsRepository: IProductsRepository
  ) {}

  public async execute({ user_id, id }: IRequestDTO): Promise<Product> {
    const product = await this.productsRepository.findById(id);

    if (!product) {
      throw new AppError('Produto não encontrado.');
    }

    if (product.id_usuario !== user_id) {
      throw new AppError('Você não pode deletar esse produto');
    }

    return this.productsRepository.delete(product);
  }
}
