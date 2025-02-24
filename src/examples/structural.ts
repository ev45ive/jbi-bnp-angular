interface Point {
  x: number;
  y: number;
}
interface Vector /* extends Point */ {
  x: number;
  y: number;
  length: number;
}

// Structural Typing vs Nominal Types
let p: Point = { x: 123, y: 123 };
let v: Vector = { x: 345, y: 325, length: 123 };

// Convariance - give at least what is required

// v = p; // ERROR: Property 'length' is missing in type 'Point' but required in type 'Vector'
p = v; // OK - extra is OK!

// Ad Hoc Types // Type Aliases

// p.length // ERROR - Property 'length' does not exist on type 'Point'.ts(2339)
(p as Vector).length; // works in JS, but will it always!?

// const pv = p as Point | Vector;
const pv = p as Point | (Point & { length: number });

if ('length' in pv) {
  pv.length; // : Point & Record<"length", unknown>
} else {
  pv;
}

v; // Vector
p; // Point

// Contravariance - expect No more than is given

let drawPoint: (v: Point, color: string) => Point;
let drawVector: (v: Vector) => Vector;

drawPoint = (p: Point, color) => ({}) as Point;
drawPoint = (p: Point) => ({}) as Vector;
drawPoint = () => ({}) as Vector;
// drawPoint = (p: Vector) => {}; // Only point is given!

drawVector = (p: Point) => ({}) as Vector;
drawVector = (p: Vector) => ({}) as Vector;

// this.elem.nativeElement.addEventListener('input', (e: Event) => {
//     if (!(e instanceof InputEvent && e.target instanceof HTMLElement)) return;
//     e.target.innerHTML; // InputEvent & {target: HTMLElement }

// Unions vs Intersections

interface ThingA {
  A: 'a';
}
interface ThingB {
  B: 'b';
}
const unionAB1: ThingA | ThingB = { A: 'a' };
const unionAB2: ThingA | ThingB = { B: 'b' };
const unionAB3: ThingA | ThingB = { A: 'a', B: 'b' };

// const intersectAB1: ThingA & ThingB = { A: 'a'  }; // Errors
// const intersectAB2: ThingA & ThingB = {   B: 'b' }; // Errors
const intersectAB3: ThingA & ThingB = { A: 'a', B: 'b' };

type OptionA = { type: 'A'; value: string };
type OptionB = { type: 'B'; value: number; extra: 123 };

const unionAB11: OptionA | OptionB = { type: 'A', value: '123' };
const unionAB12: OptionA | OptionB = { type: 'B', value: 123, extra: 123 };

const interOAOB: OptionA & OptionB = {} as never;

type X = { q: string | undefined; x: 1 };
type Y = { q: string; y: number };

const intXY: X & Y = { q: '123', x: 1, y: 2 };

// Freshness - Inline is Invariant (no more, no less)
type Person = { name: string; age: number; friends?: Person[] };
// const alice: Person = { name: 'Alice', age: 42, friends: [], likes:'bananas' }  // Error
const alice = {
  name: 'Alice',
  age: 42,
  friends: [],
  likes: 'bananas',
} as Person & { likes: any }; // Fine

function showPersonInfo(person: Person) {}

showPersonInfo(alice); // Person & { likes:any }
showPersonInfo({ name: 'Bob', age: 32 });
// showPersonInfo({name:'Bob', age:32, friends:[], likes:'oranges'}) // Error
// showPersonInfo({name:'Bob', age:32, friendss:[alice]}) // Error - A TYPO!

// Object vs object vs {}

function onlyComplex(value: object) {
  /* typeof value === 'object' */
  value.toString();
}
// onlyComplex(null); // Error
// onlyComplex(undefined); // Error
// onlyComplex(123); // Error
// onlyComplex('123'); // Error
onlyComplex({}); // OK
onlyComplex({ x: 1 }); // OK
onlyComplex([]); // OK
onlyComplex(function () {}); // OK
onlyComplex(new Date()); // OK

function onlyNonNull(value: {}) {
  value.toString();
}
// onlyNonNull(null)
// onlyNonNull(undefined)
onlyNonNull(123);
onlyNonNull('123');
onlyNonNull({});
onlyNonNull({ x: 1 });

// function objectPrototype(value: Object & {x:1}) { value.x; value.toString() }
function objectPrototype(value: Object) {
  value.toString();
}
// objectPrototype(null);
// objectPrototype(undefined);
objectPrototype(123);
objectPrototype('123');
objectPrototype({});
objectPrototype({ x: 1 });

// Branded Types -> Nominal Typing
type User = {
  id: string;
};

let playlistId = '123';
let userId = '23452';
let albumID = { id: 123, type: 'album' } as const;

function getPlaylistById(id: string) {}
getPlaylistById(userId);

function getUserById(id: User['id']) {}
getUserById(playlistId);

declare const AlbumIdSymbol: unique symbol;
type AlbumId = string & { [AlbumIdSymbol]: 'album' };
function createAlbumId(id: string) {
  return id as AlbumId;
}
const albumId = createAlbumId('123');

function getAlbumById(id: AlbumId) {}
// getAlbumById(playlistId);
// getAlbumById('1231');
getAlbumById(albumId);

const showOnPage: string = albumId;

// Open ended union:
type AB = 'A' | 'B';
type S_wide = AB | string;
type S = AB | (string & {});

// const ab: AB = 'C'; // Error
const s1: S_wide = 'Bababa';
const s2: S = 'A';
const s3: S = 'Alibaba';

// Template literal types
type protocols = 'http' | 'https';
type domains = 'npb.com' | 'jbi.com';
type startWith = `${protocols}://${domains}`;
type URLS = `${startWith}/${string}`;

const serverURL1: URLS = 'https://jbi.com/';
const serverURL2: URLS = 'https://jbi.com/test/etst';
