import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Product } from '../../generated/prisma';
import type { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateProductDto): Promise<Product> {
    const { companyId, ...rest } = dto;

    return this.prisma.product.create({
      data: {
        ...rest,
        company: {
          connect: { id: companyId },
        },
      },
    });
  }

  async searchByName(name: string): Promise<Product[]> {
    return this.prisma.product.findMany({
      where: {
        name: {
          contains: name,
          mode: 'insensitive',
        },
      },
      include: {
        company: true,
      },
    });
  }

  async findAll(): Promise<Product[]> {
    return this.prisma.product.findMany({ include: { company: true } });
  }

  async findOne(id: string): Promise<Product | null> {
    return this.prisma.product.findUnique({
      where: { id },
      include: { company: true },
    });
  }

  async update(id: string, data: UpdateProductDto): Promise<Product> {
    return this.prisma.product.update({ where: { id }, data });
  }

  async remove(id: string): Promise<Product> {
    return this.prisma.product.delete({ where: { id } });
  }

  async filter(params: {
    name?: string;
    minPrice?: number;
    maxPrice?: number;
    companyId?: string;
  }): Promise<Product[]> {
    const { name, minPrice, maxPrice, companyId } = params;

    return this.prisma.product.findMany({
      where: {
        name: name ? { contains: name, mode: 'insensitive' } : undefined,
        price: {
          gte: minPrice ?? undefined,
          lte: maxPrice ?? undefined,
        },
        companyId,
      },
      include: { company: true },
    });
  }
}
