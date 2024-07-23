import { multiply, substract } from './lib';

export {};

const add = (a: number, b: number) => {
  return a + b;
};

substract(123, 123);
multiply(123, 123);

///$ tsc 0_js_to_ts/index.ts --target esnext --strict --watch

// tsc 0_js_to_ts/lib.js --allowJs --declaration --emitDeclarationOnly --declarationMap
