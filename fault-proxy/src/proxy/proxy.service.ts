import {
  BadGatewayException,
  BadRequestException,
  Injectable,
  Logger,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ProxyService {
  private readonly logger = new Logger(ProxyService.name);

  constructor(private readonly config: ConfigService) {}

  async forward(target: string, message: unknown) {
    const nodes = this.config.getOrThrow<Record<string, string>>('proxy.nodes');

    const destination = nodes[target];

    if (!destination) {
      throw new BadRequestException(`Unknown node: ${target}`);
    }

    this.logger.log(`Forwarding RPC to ${target}`);

    try {
      const response = await fetch(`${destination}/internal/raft/message`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(message),
        signal: AbortSignal.timeout(3000),
      });

      if (!response.ok) {
        throw new BadGatewayException(
          `Node ${target} returned HTTP ${response.status}`,
        );
      }

      return response.json();
    } catch (error) {
      if (error instanceof BadGatewayException) {
        throw error;
      }

      throw new BadGatewayException(
        `Unable to communicate with node ${target}`,
      );
    }
  }
}
