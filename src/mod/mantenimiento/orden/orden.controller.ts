import { Controller, Get, Post, Body, Patch, Param, Delete, Query, HttpException, HttpStatus } from '@nestjs/common';
import { OrdenService } from './orden.service';
import { CreateOrdenDto } from './dto/create-orden.dto';
import { UpdateOrdenDto } from './dto/update-orden.dto';
import { ApiTags } from '@nestjs/swagger';
import { PaginationDto } from '@global/dto/pagination.dto';
import { FilterOrdenDto } from './dto/filter-orden.dto';
import { ZonaService } from '@module/zona/zona.service';

@Controller('orden-mantenimiento')
export class OrdenController {
  constructor(
    private readonly ordenService: OrdenService,
    private readonly zonaService: ZonaService
  ) {}

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
  async create(@Body() createOrdenDto: CreateOrdenDto) {

    if(await this.zonaService.findOne(createOrdenDto.zona_id) == null){
      throw new HttpException(
        `No existe la zona con el id # : ${createOrdenDto.zona_id}`,
        HttpStatus.BAD_REQUEST, 
      );
    }

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
