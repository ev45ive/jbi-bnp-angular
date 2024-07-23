// function add(a:string, b:string) {
// function add(a: number, b: number) {
// function add(a, b) {
// function add(a: any, b: any) {// non strict

/**
 * Overloads
 */
function add(a: string, b: string): string;
function add(a: number, b: number): number;
function add(a: number, b: number, c: number): number;

function add(a: any, b: any, c?: number) {
  return a + b;
}

// add(null, undefined); // non Strict
// add(null); // non Strict

add(1, 2);
add('Alice', 'has a cat');
