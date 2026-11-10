import { Injectable } from '@nestjs/common';
import { JsonValue } from './interfaces/json-value.interface.js';
import { LoggableService } from '../common/services/loggable.service.js';

@Injectable()
export class StateMachineService extends LoggableService {
  private readonly store: Map<String, JsonValue>;

  constructor() {
    super();
    this.store = new Map<String, JsonValue>();
  }

  set(key: string, value: JsonValue) {
    this.store.set(key, value);
    this.logger.log(
      `Request for setting value for key : ${key} and value: ${value}`,
    );
    return {
      success: true,
      key,
      value,
    };
  }

  get(key: string): JsonValue {
    const value = this.store.get(key);
    this.logger.log(`Value: ${value}`);
    if (value === undefined) {
      this.logger.log(`Value is undefined`);
      return null;
    }
    return value;
  }
}
