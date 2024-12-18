export type Primitive = string | number | boolean | null | undefined;
export type JsonValue = Primitive | JsonArray | JsonObject;
export interface JsonObject {
  [key: string]: JsonValue;
}
export type JsonArray = Array<JsonValue>;
