export {};

const add = (a: number, b: number) => {
  return a + b;
};

class MyClass{
  property = 42344334
}

///$ tsc 0_js_to_ts/index.ts --target esnext --strict --watch