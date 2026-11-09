import { Logger } from '@nestjs/common';

export abstract class LoggableService {
  protected readonly logger = new Logger(this.constructor.name);
}
