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

function getUserInfo(person: /* extends */ { name: string }) {
  return person.name;
}

/// Constraints

// function getObjectProperty(obj: ??, key: ??) { return obj[key] }

// Step1:
const getObjectProperty1 = (obj: { name: string }, key: 'name') => obj[key];
getObjectProperty1(admin, 'name');

// Step 2
type Person2 = typeof person; // Extract type from value

const getObjectProperty2 = (obj: Person2, key: 'age' | 'name') => obj[key];
getObjectProperty2({ name: 'Alice', age: 123 }, 'name');
getObjectProperty2({ name: 'Alice', age: 123 }, 'age');

// step 3
type PersonKeys1 = 'name' | 'age';
type PersonKeys2 = keyof Person;
const keys: keyof Person = 'friends';

const getObjectProperty3 = (obj: Person2, key: keyof Person2) => obj[key];

// Step 4 - no constraing between usages - obj vs key
const getObjectProperty4 = <T>(obj: T, key: keyof T) => obj[key];
// const getObjectProperty5 = <T>(obj: T, key: 'name'|'age') => obj['name'|'age'];

getObjectProperty4(admin, 'name');
getObjectProperty4(person, 'age'); // string | number
getObjectProperty4(bot, 'model');

// step 5  - Constraints
// const getObjectProperty5 = <T, K extends keyof T>(obj: T, key: K) => obj[key];

const getObjectProperty5 = <T extends object, K extends keyof T>(
  obj: T,
  key: K,
): T[K] => obj[key];

// getObjectProperty5<Person2, 'age' | 'name'>(person, 'age'); // age
getObjectProperty5(person, 'age'); // age
// getObjectProperty5('bababa', 0);  // 'banana'[0] // Errror because not object
