import { Request, Response } from 'express';
import { container } from 'tsyringe';

import UpdateStatusProductSaleService from '@modules/orders/services/UpdateStatusProductSaleService';

export default class ProductSaleStatusController {
  public async update(request: Request, response: Response): Promise<Response> {
    const updateStatusProductSale = container.resolve(
      UpdateStatusProductSaleService
    );

    const user_id = request.user.id;
    const { id, status } = request.body;

    const saleProduct = await updateStatusProductSale.execute({
      user_id,
      id,
      status,
    });

    return response.json(saleProduct);
  }
}
