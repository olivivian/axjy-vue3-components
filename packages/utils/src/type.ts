export function isUndefined(val: unknown): val is undefined {
  return val === undefined
}

export function isNull(val: unknown): val is null {
  return val === null
}
export function isFile<T extends File>(val: unknown): val is T {
  return val instanceof File
}

export function isBlob<T extends Blob>(val: unknown): val is T {
  return val instanceof Blob
}
