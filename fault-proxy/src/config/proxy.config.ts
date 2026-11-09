import { registerAs } from '@nestjs/config';

export default registerAs('proxy', () => ({
  port: Number(process.env.PORT ?? 4000),
  nodes: {
    A: process.env.NODE_A_URL ?? 'http://node-a:3001',
    B: process.env.NODE_B_URL ?? 'http://node-b:3002',
    C: process.env.NODE_C_URL ?? 'http://node-c:3003',
  } as Record<string, string>,
}));
