import { Controller, Get, Body, Param, Post } from '@nestjs/common';
import { StateMachineService } from './state-machine.service.js';
import { SetValueDto } from './dto/set-value.dto.js';

@Controller('kv')
export class StateMachineController {
  constructor(private readonly stateMachineService: StateMachineService) {}

  @Get(':key')
  get(@Param('key') key: string) {
    return this.stateMachineService.get(key);
  }

  @Post()
  set(@Body() dto: SetValueDto) {
    return this.stateMachineService.set(dto.key, dto.value);
  }
}
