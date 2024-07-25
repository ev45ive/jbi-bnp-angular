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
