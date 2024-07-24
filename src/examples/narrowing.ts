type AllowedUUIDTypes = number | string  // | { uuid: 123 };

// Function lacks ending return statement and return type does not include 'undefined'

function normalizeUUID(uuid: AllowedUUIDTypes): string {
  if (typeof uuid === 'number') {
    return uuid.toFixed(0); //  string
  }

  if (typeof uuid === 'string') {
    return uuid.toLowerCase();
  }
  uuid satisfies never;
  throw new Error('Not valid uuid' + uuid);
}

const result1: string = normalizeUUID(123.0); /// '123'
const result2: string = normalizeUUID('BaNaNaNa Batman!'); // 'bananana batman!'
