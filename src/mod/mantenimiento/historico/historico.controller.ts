import { Controller, Get, Post, Body, Patch, Param, Delete, Query, HttpException, HttpStatus } from '@nestjs/common';
import { HistoricoService } from './historico.service';
import { CreateHistoricoDto } from './dto/create-historico.dto';
import { UpdateHistoricoDto } from './dto/update-historico.dto';
import { ApiTags } from '@nestjs/swagger';
import { PaginationDto } from '@global/dto/pagination.dto';
import { ProveedorService } from '@module/proveedor/proveedor.service';

@Controller('orden-historico')
export class HistoricoController {
  constructor(
    private readonly historicoService: HistoricoService,
    private readonly proveedorService: ProveedorService
  ) {}

  @ApiTags('orden-historico')
  @Get(':idOrden')
  findAll(@Param('idOrden') idOrden: string, @Query() paginationDto: PaginationDto) {
    return this.historicoService.findAll(+idOrden, paginationDto);
  }

}
