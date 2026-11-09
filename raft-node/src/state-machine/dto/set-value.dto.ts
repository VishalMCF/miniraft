import { JsonValue } from '../interfaces/json-value.interface.js';
import { IsNotEmpty, IsString } from 'class-validator';

export class SetValueDto {
  @IsString()
  @IsNotEmpty()
  key: string;
  value: JsonValue;
}
