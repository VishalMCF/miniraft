import { Module } from '@nestjs/common';
import { TransportService } from './transport.service.js';

@Module({
  exports: [TransportService],
  providers: [TransportService],
})
export class TransportModule {}
