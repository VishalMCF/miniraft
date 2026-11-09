import { Module } from '@nestjs/common';
import { PersistenceService } from './persistence.service.js';

@Module({
  exports: [PersistenceService],
  providers: [PersistenceService],
})
export class PersistenceModule {}
