import { Controller, Body, Post } from '@nestjs/common';
import { RaftService } from './raft.service.js';
import { RaftMessageDto } from './dto/raft-message.dto.js';

@Controller('internal/raft')
export class RaftController {
  constructor(private readonly raftService: RaftService) {}

  @Post('message')
  receive(@Body() message: RaftMessageDto) {
    return this.raftService.receiveMessage(message);
  }
}
