import { Module } from '@nestjs/common';
import { RaftController } from './raft.controller.js';
import { RaftService } from './raft.service.js';

@Module({
  controllers: [RaftController],
  providers: [RaftService],
  exports: [RaftService],
})
export class RaftModule {}
