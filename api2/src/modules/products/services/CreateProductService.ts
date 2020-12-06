import Product from '@modules/products/infra/typeorm/entities/Product';
import AppError from '@shared/errors/AppError';
import { injectable, inject } from 'tsyringe';
import IProductsRepository from '../repositories/IProductsRepository';

interface IRequest {
  id: string;
  perfil: number;
  descricao: string;
  preco: number;
  id_usuario: string;
  quantidade: number;
  nome: string;
  imagemFileName: string;
}

@injectable()
class CreateProductService {
  constructor(
    @inject('ProductsRepository')
    private productsRepository: IProductsRepository
  ) {}

  public async execute({
    id,
    perfil,
    descricao,
    preco,
    id_usuario,
    quantidade,
    nome,
    imagemFileName,
  }: IRequest): Promise<Product> {
    if (perfil === 0) {
      throw new AppError('Você não é um vendedor', 401);
    }

    if (!id) {
      throw new AppError('Você não está logado', 401);
    }

    const product = await this.productsRepository.create({
      descricao,
      preco,
      imagem: imagemFileName,
      id_usuario,
      quantidade,
      nome,
    });

    await this.productsRepository.save(product);

    return product;
  }
}

export default CreateProductService;
