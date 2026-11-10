import { Injectable } from '@nestjs/common';
import { encode, decode } from '@msgpack/msgpack';
import CRC32 from 'crc-32';
import {WalRecord} from "../interfaces/wal-record.interfaces.js";

@Injectable()
export class RecordEncoderService {
    encodeRecord(record: WalRecord): Buffer {
        const payload = Buffer.from(encode(record));

        const header = Buffer.alloc(8);
        header.writeUInt32BE(payload.length, 0);

        const checksum = CRC32.buf(payload) >>> 0;
        header.writeUInt32BE(checksum, 4);

        return Buffer.concat([header, payload]);
    }

    decodeRecord(payload: Buffer): WalRecord {
        return decode(payload) as WalRecord;
    }

    verifyChecksum(payload: Buffer, expected: number): boolean {
        return (CRC32.buf(payload) >>> 0) === expected;
    }
}