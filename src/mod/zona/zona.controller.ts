import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { ZonaService } from './zona.service';
import { CreateZonaDto } from './dto/create-zona.dto';
import { UpdateZonaDto } from './dto/update-zona.dto';


import { PaginationDto } from '@global/dto/pagination.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('zona')
export class ZonaController {
  constructor(private readonly zonaService: ZonaService) {}

    @ApiTags('zonaSocial')
    @Post('crear-zona')
    create(@Body() createZonaDto: CreateZonaDto) {
      return this.zonaService.create(createZonaDto);
    }

    @ApiTags('zonaSocial')
    @Get()
    findAll(@Query() paginationDto: PaginationDto) {
      return this.zonaService.findAll(paginationDto);
    }
    
    @ApiTags('zonaSocial')
    @Get('obtener-zonaSocial/:id')
    findOne(@Param('id') id: string) {
      return this.zonaService.findOne(+id);
    }

    @ApiTags('zonaSocial')
    @Patch('editar-zonaSocial/:id')
    update(@Param('id') id: string, @Body() updateZonaDto: UpdateZonaDto) {
      return this.zonaService.update(+id, updateZonaDto);
    }
    
    @ApiTags('zonaSocial')
    @Delete('eliminar-zonaSocial/:id')
    remove(@Param('id') id: string) {
      return this.zonaService.remove(+id);
    }
  
}
