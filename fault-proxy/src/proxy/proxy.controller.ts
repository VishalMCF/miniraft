import { Controller, Body, Post, Param } from '@nestjs/common';
import { ProxyService } from './proxy.service.js';

@Controller('rpc')
export class ProxyController {
  constructor(private readonly proxyService: ProxyService) {}

  @Post(':target')
  forward(@Param('target') target: string, @Body() message: unknown) {
    return this.proxyService.forward(target, message);
  }
}
