type Box = { value: any };

const b: Box = { value: 'banana' };
b.value; // any

function logAndReturn(value: string | number | number[]) {
  console.log(value);
  return value;
}
const value1 = logAndReturn([1, 2, 3]);
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

safeBox.value.toLowerCase();

/// Generic Inference

const arr1 = [1, 2, 3]; // number[]
const arr2 = ['alice', 'cat']; // Array<string>
const arr3 = [123, 'alice', { x: 1 }]; // Array<string|number|object>

// function takeFirst<T>(arr: Array<T>): T{ return arr[0] }

function takeFirst<T>(arr: T[]) {
  return arr[0];
}

const resul1 = takeFirst<number>(arr1); // number
const resul2 = takeFirst(['alice', 'cat']); // string
const resul3: number | string = takeFirst([123, '123']);

// Generic classes / interfaces

interface Collection<T> {
  add(x: T): void;
  get(): T;
  // get(): T | undefined;
}

class Queue<T> implements Collection<T> {
  items: T[] = [];
  add(x: T): void {
    this.items.push(x);
  }
  get(): T {
    const item = this.items.shift();
    if (!item) throw new Error('Cant remove last item because reasons!');
    return item;
  }
}

interface IMappable {
  // map(fn): ?[]
}
// class Stack implements Collection {}

function combineSameTypeArrays<T>(arr1: T[], arr2: T[]) {
  return arr1.concat(arr2);
}
combineSameTypeArrays([1], [1]);

// function combineDifferentArrays<T1,T2>(arr1: T1[], arr2: T2[]) {
//   return arr1.concat(arr2);
// }
// combineDifferentArrays([123], ['123']);

// No need for GEnerics - different inputs, same output

const admin = { name: 'Admin' };
const person = { name: 'Alice', age: 123 };
const bot = { name: 'Helpful CHatb0t', model: 'gpt99' };

function getUserInfo(person: { name: string }) {
  return person.name;
}
