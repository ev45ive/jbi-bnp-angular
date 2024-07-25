interface Point {
  x: number;
  y: number;
}
interface Vector /* extends Point */{
  x: number;
  y: number;
  length: number;
}

let p: Point = { x: 123, y: 123 };
let v: Vector = { x: 345, y: 325, length: 123 };

// Structural Typing vs Nominal Types
p = v; // OK
// v = p; // ERROR: Property 'length' is missing in type 'Point' but required in type 'Vector'
