import Product from '@modules/products/infra/typeorm/entities/Product';
import OrderProduct from '../infra/typeorm/entities/OrderProduct';

export default interface ICreateOrderDTO {
  id_usuario: string;
  status: number;
  pedido_produtos: OrderProduct[];
  endereco_entrega: string;
  valor_produtos: number;
  valor_final: number;
}
