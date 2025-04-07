import { Module } from '@nestjs/common';
import { HistoricoService } from './historico.service';
import { HistoricoController } from './historico.controller';
import { GlobalModule } from '@global/global.module';
import { ProveedorModule } from '@module/proveedor/proveedor.module';
import { historicoProvider } from './entities/historico.provider';

@Module({
  imports: [
    GlobalModule,
    ProveedorModule
  ],
  controllers: [HistoricoController],
  providers: [
    ...historicoProvider,
    HistoricoService
  ],
})
export class HistoricoModule {}
