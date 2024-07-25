export {};

type INdexedType = {
  [k in number]: string;
};

const someDIct: INdexedType = {};
someDIct[123] = 'banana';
someDIct['345'] = 'banana23';

// Restricted INdex
type RequiredKeys = 'id' | 'name';

type INdexedTypeRequiredKeys = {
  [k in RequiredKeys]: string;
};
const allowedObj: INdexedTypeRequiredKeys = {
  id: '123',
  name: '123',
  //   x: '123',
};

// Restricted INdex
type PartialKeys = 'id' | 'name';

type INdexedTypePartialKeys = {
  // thisIsNormalKeyX ?: string;
  [k in PartialKeys]?: string;
};
const partialObj: INdexedTypePartialKeys = {
  id: '123',
  //   name:'adwa' // optional now
};

// Mapped Types
// interface Person { id: number, name:string, friends:Person[]  }
type PersonKeys = keyof Person; // id | name | friends

type PartialPerson = {
  //   [prop in PersonKeys]?: 'banana';
  //   [K in PersonKeys]?: Person[K] | 'banana'
  [K in PersonKeys]?: Person[K];
};
// const bananaPerson: PartialPerson = { name: 'banana' };
const bananaPerson: PartialPerson = { name: 'Not a banana', age: 123 };

type Partial<T> = {
  [K in keyof T]?: T[K];
};

type OPtionalPRops = Partial<Person>; // Make all props optional

type SomePersonType = {
  id: number;
  name: string;
  ppl: Person[];
};

/// Take some props
// type Pick<T,K extends keyof any> = {
// [key in K] : T[K]

type Pick<T, K extends keyof T> = {
  [key in K]: T[key];
};
type onlyNameAndID = Pick<SomePersonType, 'id' | 'name'>;

// --- Conditional

type ReplaceBanan<T, U> = T extends U ? 'no' | 'nope' : 'yes';

                                              type DontWant = 'banana';
                             type AllOptions = 'on' | 'off' | 'banana';
type YesNo = ReplaceBanan<AllOptions, DontWant>; // "no" | "nope" | "yes"

// Condition -- removing items:

type Exclude<T, U> = T extends U ? never : T;
type Extract<T, U> = T extends U ? T : never;

type AllOptions1 = 'on' | 'off' | 'banana';
type DontWant2 = 'banana';

type NoBananas = Exclude<AllOptions, DontWant>; // "no" | "nope" | "yes"
type OnlyBananas = Extract<AllOptions, DontWant>; // "no" | "nope" | "yes"



