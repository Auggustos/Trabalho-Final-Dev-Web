import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';
import IProductsRepository from '../repositories/IProductsRepository';

import Product from '../infra/typeorm/entities/Product';

/* interface IRequest {
  id: string;
} */

interface IRequestDTO {
  user_id: string;
  id: string;
  descricao: string;
  preco: number;
  quantidade: number;
}

@injectable()
export default class UpdateProductService {
  constructor(
    @inject('ProductsRepository')
    private productsRepository: IProductsRepository
  ) {}

  public async execute({
    user_id,
    id,
    descricao,
    preco,
    quantidade,
  }: IRequestDTO): Promise<Product> {
    const product = await this.productsRepository.findById(id);

    if (!product) {
      throw new AppError('Produto não encontrado.');
    }

    if (product.id_usuario !== user_id) {
      throw new AppError('Você não pode atualizar esse produto');
    }

    product.descricao = descricao;
    product.preco = preco;
    product.quantidade = quantidade;

    return this.productsRepository.save(product);
  }
}
