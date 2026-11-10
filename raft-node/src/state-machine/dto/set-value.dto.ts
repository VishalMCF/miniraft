import type { JsonValue } from '../interfaces/json-value.interface.js';
import { Allow, IsNotEmpty, IsString } from 'class-validator';

export class SetValueDto {
  @IsString()
  @IsNotEmpty()
  key: string;

  @Allow()
  value: JsonValue;
}
