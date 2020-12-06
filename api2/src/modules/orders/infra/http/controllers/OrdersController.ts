import CreateOrderService from '@modules/orders/services/CreateOrderService';
import ListOrdersService from '@modules/orders/services/ListOrdersService';
import ShowOrderService from '@modules/orders/services/ShowOrderService';
import { Response, Request } from 'express';
import { container } from 'tsyringe';

export default class OrdersController {
  public async index(request: Request, response: Response): Promise<Response> {
    const { id } = request.user;

    const listOrders = container.resolve(ListOrdersService);

    const orders = await listOrders.execute(id);

    return response.json(orders);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const id_usuario = request.user.id;
    const {
      status,
      pedido_produtos,
      valor_produtos,
      endereco_entrega,
    } = request.body;

    const createOrder = container.resolve(CreateOrderService);

    const order = await createOrder.execute({
      id_usuario,
      status,
      pedido_produtos,
      valor_produtos,
      endereco_entrega,
    });

    return response.json(order);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    /* const id_usuario = request.user.id;
    const { status } = request.body;

    const updateOrder = container.resolve(CreateOrderService);

    const order = await createOrder.execute({
      id_usuario,
      status,
      pedido_produtos,
    }); */

    return response.json({ ok: true });
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const showOrder = container.resolve(ShowOrderService);

    const order = await showOrder.execute(id);

    return response.json(order);
  }
}
