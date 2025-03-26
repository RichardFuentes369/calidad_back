import { DataSource } from 'typeorm';
import { Historico } from './historico.entity';

export const userProviders = [
  {
    provide: 'HISTORICO_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Historico),
    inject: ['DATA_SOURCE'],
  },
];