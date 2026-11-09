import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { RaftMessageDto } from './dto/raft-message.dto.js';
import { LoggableService } from '../common/services/loggable.service.js';

@Injectable()
export class RaftService extends LoggableService {
  constructor(private readonly config: ConfigService) {
    super();
  }

  receiveMessage(message: RaftMessageDto) {
    const nodeId = this.config.getOrThrow<string>('raft.nodeId');

    this.logger.log(
      `[${nodeId}] Received ${message.type} from ${message.from}`,
    );

    return {
      received: true,
      nodeId,
      messageId: message.id,
    };
  }
}
