import { Body, Controller, Post } from '@nestjs/common';
import { CreateProductUseCase } from './use-cases/create-product.usecase';
import { CreateProductDTO } from './product.dto';
import { Role, Roles } from 'src/decorators/roles.decorators';


@Controller('products')
export class ProductController {
  constructor(private readonly createProductUseCase: CreateProductUseCase) {}


  @Roles(Role.ADMIN)
  @Post('/')
  async create(@Body() data: CreateProductDTO) {

    const result = await this.createProductUseCase.execute(data);
    return result;
  }
}
