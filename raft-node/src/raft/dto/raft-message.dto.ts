import { RpcType } from '../enums/rpc-type.enum.js';
import { IsString, IsObject, IsEnum, Min, IsInt } from 'class-validator';

export class RaftMessageDto {
  @IsString()
  id: string;

  @IsString()
  from: string;

  @IsString()
  to: string;

  @IsEnum(RpcType)
  type: RpcType;

  @IsInt()
  @Min(0)
  term: number;

  @IsObject()
  payload: Record<string, unknown>;
}
