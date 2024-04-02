import { Body, Controller, Post } from '@nestjs/common';
import { CreateProductUseCase } from './use-cases/create-product.usecase';
import { CreateProductDTO } from './product.dto';


@Controller('products')
export class ProductController {
  constructor(private readonly createProductUseCase: CreateProductUseCase) {}


  @Post('/')
  async create(@Body() data: CreateProductDTO) {

    const result = await this.createProductUseCase.execute(data);
    return result;
  }
}
