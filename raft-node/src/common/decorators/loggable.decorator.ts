import { Logger } from '@nestjs/common';

export function Loggable(): (target: any) => any {
  return function (target: any) {
    return class extends target {
      readonly logger = new Logger(target.name);
    };
  };
}
