import { DataSource } from 'typeorm';
import { Proveedor } from './proveedor.entity';

export const userProviders = [
  {
    provide: 'PROVEEDOR_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Proveedor),
    inject: ['DATA_SOURCE'],
  },
];