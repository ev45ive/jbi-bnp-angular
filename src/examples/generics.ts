const arr1 = [1, 2, 3]; // number[]
const arr2 = ['alice', 'cat']; // Array<string>

type Box = { value: any };

const b: Box = { value: 'banana' };
b.value; // any

function logAndReturn(value: string | number | number[]) {
  console.log(value);
  return value;
}
const value1 = logAndReturn(arr1);
const value = logAndReturn('awd');
value; // any

// Convieniece generics // Useless generics
declare function parseJSON(json: string): {};
declare function parseJSON2<T>(json: string): T;

let res: { x: 1 };
res = parseJSON('{x:1}') as { x: 1 };

res = parseJSON2<{ x: 1 }>('{x:1}');

res.x;

// Useful gernerics - used at least 2x - in matches out

function identity1<T>(x: T): T {
  return x;
}
const identity2 = <T>(x: T): T => x;

type TypeSaveBox<T> = { value: T };
const safeBox: TypeSaveBox<string> = { value: '123' };
safeBox.value.toLowerCase()
