import { DataSource } from 'typeorm';
import { Zona } from './zona.entity';

export const userProviders = [
  {
    provide: 'ZONA_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Zona),
    inject: ['DATA_SOURCE'],
  },
];