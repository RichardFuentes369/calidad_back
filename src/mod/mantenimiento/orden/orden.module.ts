import { Module } from '@nestjs/common';
import { OrdenService } from './orden.service';

import { GlobalModule } from '@global/global.module';
import { OrdenController } from './orden.controller';
import { ordenProviders } from './entities/order.provider';

@Module({
  imports: [GlobalModule],
  controllers: [OrdenController],
  providers: [
    ...ordenProviders,
    OrdenService
  ],
})
export class OrdenModule {}
