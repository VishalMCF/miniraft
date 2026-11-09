import { Injectable } from '@nestjs/common';
import { JsonValue } from './interfaces/json-value.interface.js';

@Injectable()
export class StateMachineService {
  private readonly store: Map<String, JsonValue>;

  constructor() {
    this.store = new Map<String, JsonValue>();
  }

  set(key: string, value: JsonValue) {
    this.store.set(key, value);
    return {
      success: true,
      key,
      value,
    };
  }

  get(key: string): JsonValue {
    const value = this.get(key);
    if (value === undefined) {
      return null;
    }
    return value;
  }
}
