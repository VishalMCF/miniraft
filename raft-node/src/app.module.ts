import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import raftConfig from './config/raft.config.js';
import { HealthModule } from './health/health.module.js';
import { RaftModule } from './raft/raft.module.js';
import { TransportModule } from './transport/transport.module.js';
import {StateMachineModule} from "./state-machine/state-machine.module.js";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [raftConfig],
    }),
    HealthModule,
    RaftModule,
    TransportModule,
    StateMachineModule
  ],
})
export class AppModule {}
