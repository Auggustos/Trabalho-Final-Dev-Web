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
import OrderProduct from './OrderProduct';

@Entity('pedidos') // referencia da tabela no banco de dados
class Order {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  // @Column('type') => quando vazio o tipo padrão é string (varchar)
  // CTRL + SPACE mostra os tipos disponiveis.
  @Column()
  id_usuario: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'id_usuario' })
  usuario: User;

  @OneToMany(() => OrderProduct, op => op.pedido, {
    cascade: ['insert', 'update'],
  })
  pedido_produtos: OrderProduct[];

  @Column()
  status: number;

  @Column()
  endereco_entrega: string;

  @Column()
  valor_produtos: number;

  @Column()
  valor_final: number;

  @CreateDateColumn()
  criado_em: Date;

  @UpdateDateColumn()
  atualizado_em: Date;
}

export default Order;
