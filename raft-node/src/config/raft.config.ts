import { registerAs } from '@nestjs/config';

export default registerAs('raft', () => ({
  nodeId: process.env.NODE_ID ?? 'A',
  port: Number(process.env.PORT ?? 3001),
  proxyUrl: process.env.PROXY_URL ?? 'http://localhost:4000',
}));
