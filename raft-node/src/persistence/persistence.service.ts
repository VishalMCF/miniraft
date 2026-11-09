import { Injectable } from '@nestjs/common';
import { LoggableService } from '../common/services/loggable.service.js';
import { ConfigService } from '@nestjs/config';
import { RaftMessageDto } from '../raft/dto/raft-message.dto.js';

@Injectable()
export class PersistenceService extends LoggableService {}
