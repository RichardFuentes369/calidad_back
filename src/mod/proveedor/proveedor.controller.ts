import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { ProveedorService } from './proveedor.service';
import { CreateProveedorDto } from './dto/create-proveedor.dto';
import { UpdateProveedorDto } from './dto/update-proveedor.dto';

import { PaginationDto } from '@global/dto/pagination.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('proveedor')
export class ProveedorController {
  constructor(private readonly proveedorService: ProveedorService) {}

    @ApiTags('proveedor')
    @Post('crear-proveedor')
    create(@Body() createProveedorDto: CreateProveedorDto) {
      return this.proveedorService.create(createProveedorDto);
    }

    @ApiTags('proveedor')
    @Get()
    findAll(@Query() paginationDto: PaginationDto) {
      return this.proveedorService.findAll(paginationDto);
    }
    
    @ApiTags('proveedor')
    @Get('obtener-proveedor/:id')
    findOne(@Param('id') id: string) {
      return this.proveedorService.findOne(+id);
    }

    @ApiTags('proveedor')
    @Patch('editar-proveedor/:id')
    update(@Param('id') id: string, @Body() updateProveedorDto: UpdateProveedorDto) {
      return this.proveedorService.update(+id, updateProveedorDto);
    }
    
    @ApiTags('proveedor')
    @Delete('eliminar-proveedor/:id')
    remove(@Param('id') id: string) {
      return this.proveedorService.remove(+id);
    }

}
