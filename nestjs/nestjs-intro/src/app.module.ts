import { Module } from '@nestjs/common';
import { ProductsController } from './product/product.controller';
import { ProductsService } from './product/product.service';
import { ProductModule } from './product/product.module';

@Module({
  imports: [ProductModule],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class AppModule {}
