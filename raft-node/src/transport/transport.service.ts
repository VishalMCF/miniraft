import { Injectable } from '@nestjs/common';
import { LoggableService } from '../common/services/loggable.service.js';
import { ConfigService } from '@nestjs/config';
import { RaftMessageDto } from '../raft/dto/raft-message.dto.js';

@Injectable()
export class TransportService extends LoggableService {
  constructor(private readonly configService: ConfigService) {
    super();
  }

  async send(message: RaftMessageDto): Promise<unknown> {
    const proxyUrl = this.configService.getOrThrow<string>('raft.proxyUrl');

    const response = await fetch(
      `${proxyUrl}/rpc/${encodeURIComponent(message.to)}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(message),
        signal: AbortSignal.timeout(3000),
      },
    );

    if (!response.ok) {
      throw new Error(`RPC failed: ${response.status}`);
    }

    return response.json();
  }
}
