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
      // return this.userService.create(createZonaDto);
    }

    @ApiTags('zonaSocial')
    @Get()
    findAll(@Query() paginationDto: PaginationDto) {
      // return this.userService.findAll(paginationDto);
    }
    
    @ApiTags('zonaSocial')
    @Get('obtener-zonaSocial/:id')
    findOne(@Param('id') id: string) {
      // return this.userService.findOne(+id);
    }

    @ApiTags('zonaSocial')
    @Patch('editar-zonaSocial/:id')
    update(@Param('id') id: string, @Body() updateZonaDto: UpdateZonaDto) {
      // return this.userService.update(+id, updateUserDto);
    }
    
    @ApiTags('zonaSocial')
    @Delete('eliminar-zonaSocial/:id')
    remove(@Param('id') id: string) {
      // return this.userService.remove(+id);
    }
  
}
