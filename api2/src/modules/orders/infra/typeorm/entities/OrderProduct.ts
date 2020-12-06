import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import User from '@modules/users/infra/typeorm/entities/User';
import Product from '@modules/products/infra/typeorm/entities/Product';
import Order from './Order';

@Entity('pedido_produto') // referencia da tabela no banco de dados
class OrderProduct {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  // @Column('type') => quando vazio o tipo padrão é string (varchar)
  // CTRL + SPACE mostra os tipos disponiveis.
  @Column()
  id_pedido: string;

  @Column()
  id_produto: string;

  @ManyToOne(() => Order)
  @JoinColumn({ name: 'id_pedido' })
  pedido: Order;

  @ManyToOne(() => Product)
  @JoinColumn({ name: 'id_produto' })
  produto: Product;

  @Column()
  quantidade: number;

  @Column()
  valor_unitario: number;

  @Column()
  valor: number;

  @Column()
  status: number;

  @CreateDateColumn()
  criado_em: Date;

  @UpdateDateColumn()
  atualizado_em: Date;
}

export default OrderProduct;
