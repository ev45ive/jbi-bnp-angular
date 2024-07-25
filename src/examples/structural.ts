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

// Contravariance - expect no more than is given

let drawPoint: (v: Point) => Point;
let drawVector: (v: Vector) => Vector;

drawPoint = (p: Point) => ({} as Point);
drawPoint = (p: Point) => ({} as Vector);
// drawPoint = (p: Vector) => {}; // Only point is given!

drawVector = (p: Point) => ({} as Vector)
drawVector = (p: Vector) => ({} as Vector);

