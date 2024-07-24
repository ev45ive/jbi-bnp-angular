function normalizeUUID(uuid: number | string) {
  // lowercase
  // Integer
}

const result1: string = normalizeUUID(123.00);  /// '123'
const result2: string = normalizeUUID('BaNaNaNa Batman!'); // 'bananana batman!'
