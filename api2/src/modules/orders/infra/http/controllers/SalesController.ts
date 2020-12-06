import ListSalesService from '@modules/orders/services/ListSalesService';
import { Response, Request } from 'express';
import { container } from 'tsyringe';

export default class SalesController {
  public async index(request: Request, response: Response): Promise<Response> {
    const { id } = request.user;
    const listSales = container.resolve(ListSalesService);

    const orders = await listSales.execute(id);

    return response.json(orders);
  }
}
