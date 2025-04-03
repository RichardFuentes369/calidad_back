import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { OrdenService } from './orden.service';
import { CreateOrdenDto } from './dto/create-orden.dto';
import { UpdateOrdenDto } from './dto/update-orden.dto';
import { ApiTags } from '@nestjs/swagger';
import { PaginationDto } from '@global/dto/pagination.dto';
import { FilterOrdenDto } from './dto/filter-orden.dto';

@Controller('orden-mantenimiento')
export class OrdenController {
  constructor(private readonly ordenService: OrdenService) {}

  @ApiTags('orden-mantenimiento')
  @Get()
  findAll(@Query() paginationDto: PaginationDto) {
    return this.ordenService.findAll(paginationDto);
  }

  @ApiTags('orden-mantenimiento')
  @Get('orden')
  findOne(@Query() filterOrdenDto: FilterOrdenDto) {
    return this.ordenService.findOne(filterOrdenDto);
  }

  @ApiTags('orden-mantenimiento')
  @Post()
  create(@Body() createOrdenDto: CreateOrdenDto) {
    return this.ordenService.create(createOrdenDto);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateOrdenDto: UpdateOrdenDto) {
  //   return this.ordenService.update(+id, updateOrdenDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.ordenService.remove(+id);
  // }
}
