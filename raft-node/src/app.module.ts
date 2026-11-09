import { Module } from '@nestjs/common';
import {ConfigModule} from "@nestjs/config";
import raftConfig from "./config/raft.config.js";
import {HealthModule} from "./health/health.module.js";
import {RaftModule} from "./raft/raft.module.js";
import {TransportModule} from "./transport/transport.module.js";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [raftConfig]
    }),
      HealthModule,
      RaftModule,
      TransportModule,
  ],
})
export class AppModule {}
