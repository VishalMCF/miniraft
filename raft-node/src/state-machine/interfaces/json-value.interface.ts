export type JsonValue =
  string | number | boolean | JsonValue[] | null | { [key: string]: JsonValue };
