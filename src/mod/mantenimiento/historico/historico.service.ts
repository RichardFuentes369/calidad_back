import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateHistoricoDto } from './dto/create-historico.dto';
import { UpdateHistoricoDto } from './dto/update-historico.dto';
import { PaginationDto } from '@global/dto/pagination.dto';
import { Repository } from 'typeorm';
import { Historico } from './entities/historico.entity';
import { Orden } from '../orden/entities/orden.entity';

@Injectable()
export class HistoricoService {
  constructor(
    @Inject('HISTORICO_REPOSITORY')
    private historicoRepository: Repository<Historico>,
  ) {}


  async create(createHistoricoDto: CreateHistoricoDto) {

    let modelo = {
      observacion: createHistoricoDto.observacion,
      precio: createHistoricoDto.precio,
      recomendacion: createHistoricoDto.recomendacion,
      ordenId: createHistoricoDto.orden_id,
      proveedor_id: createHistoricoDto.proveedor_id,
    }

    return await this.historicoRepository.save(modelo)
  }

  listarPropiedadesTabla(T) {
    const metadata = T.metadata;
    return metadata.columns.map((column) => column.propertyName);
  }

  async findAll(idOrden: number, paginationDto: PaginationDto) {

    const { limit, page, field = 'id' , order = 'Asc' } = paginationDto
    
    if(!paginationDto.page && !paginationDto.limit) throw new NotFoundException(`
      Recuerde que debe enviar los parametros page, limit
    `)

    if(field == '') throw new NotFoundException(`Debe enviar el campo por el que desea filtrar`)
    if(!paginationDto.page) throw new NotFoundException(`Debe enviar el parametro page`)
    if(!paginationDto.limit) throw new NotFoundException(`Debe enviar el parametro limit`)

    if(field != ''){
      const propiedades = this.listarPropiedadesTabla(this.historicoRepository)
      const arratResult = propiedades.filter(obj => obj === field).length
  
      if(arratResult == 0) throw new NotFoundException(`El parametro de busqueda ${field} no existe en la base de datos`)
    }

  
    const skipeReal = (page == 1) ? 0 : (page - 1) * limit

    const peticion = async (page) => {
      return await this.historicoRepository.find({
        where: {
          ordenId: idOrden
        },
        skip: page,
        take: limit,
        order: {
          [field]: order
        }
      })
    }

    const totalRecords = async () => {
      return await this.historicoRepository.count()
    }

    return [{
      'result': await peticion(skipeReal),
      'pagination': {
        'page': page,
        'perPage': limit,
        'previou': (page == 1) ? null : page-1,
        'next': (await peticion(page*limit)).length == 0 ? null : page+1 ,
        'totalRecord': await totalRecords()
      },
      'order':{
        'order': order,
        'field': field
      }
    }]
  }

  findOne(_id: number) {
    return this.historicoRepository.findOne({
      where: [ { id: _id }],
      order: { id: 'DESC' }
    });
  }

  remove(id: number) {
    return this.historicoRepository.delete(id);
  }

}
