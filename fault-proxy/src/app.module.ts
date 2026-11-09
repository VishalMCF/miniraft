import { Module } from '@nestjs/common';
import { ProxyModule } from './proxy/proxy.module.js';
import { ConfigModule } from '@nestjs/config';
import proxyConfig from './config/proxy.config.js';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [proxyConfig],
    }),
    ProxyModule,
  ],
})
export class AppModule {}
