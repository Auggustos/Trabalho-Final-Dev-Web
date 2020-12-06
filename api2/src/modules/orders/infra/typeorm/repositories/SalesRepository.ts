import { getRepository, Repository } from 'typeorm';
import Order from '@modules/orders/infra/typeorm/entities/Order';
import ISalesRepository from '@modules/orders/repositories/ISalesRepository';

class SalesRepository implements ISalesRepository {
  private ormRepository: Repository<Order>;

  constructor() {
    this.ormRepository = getRepository(Order);
  }

  public async findAll(id: string): Promise<Order[]> {
    const orders = await this.ormRepository
      .createQueryBuilder('pedidos')
      .innerJoinAndSelect('pedidos.pedido_produtos', 'pedido_produto')
      .innerJoinAndSelect('pedidos.usuario', 'cliente')
      .innerJoinAndSelect('pedido_produto.produto', 'produto')
      .select([
        'pedidos.status',
        'pedidos.valor_final',
        'pedidos.id',
        'pedidos.criado_em',
        'pedido_produto.id',
        'pedido_produto.quantidade',
        'pedido_produto.status',
        'pedido_produto.valor_unitario',
        'produto',
        'cliente.nome',
        'cliente.email',
        'cliente.celular',
      ])
      .where('produto.id_usuario = :id', { id })
      .getMany();

    return orders;
  }
}

export default SalesRepository;
