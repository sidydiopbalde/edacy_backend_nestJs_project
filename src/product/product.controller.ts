import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  async create(@Body() createProductDto: CreateProductDto) {
    const product = await this.productService.create(createProductDto);
    return {
      message: 'Produit créé avec succès',
      data: product,
      status: 201
    };
  }

  @Get()
  async findAll() {
    const products = await this.productService.findAll();
    
    if (!products || products.length === 0) {
      return {
        message: 'Aucun produit trouvé !',
        data: [],
        status: 200
      };
    }

    return {
      message: 'Liste des produits',
      data: products,
      status: 200
    };
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const product = await this.productService.findById(+id);
    if (!product) {
      return {
        message: 'Produit introuvable',
        data: null,
        status: 404
      };
    }
    return {
      message: 'Produit trouvé',
      data: product,
      status: 200
    };
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    const updated = await this.productService.update(+id, updateProductDto);
    return {
      message: 'Produit mis à jour',
      data: updated,
      status: 200
    };
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    await this.productService.remove(+id);
    return {
      message: 'Produit supprimé',
      status: 200
    };
  }
}
