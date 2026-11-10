export interface WalRecord {
    sequence: number;
    timestamp: number;
    type: 'SET' | 'DELETE';
    key: string;
    value?: unknown;
}