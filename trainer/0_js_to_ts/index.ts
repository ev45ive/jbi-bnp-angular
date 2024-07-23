// function add(a:string, b:string) {
// function add(a: number, b: number) {
// function add(a, b) {
// function add(a: any, b: any) {// non strict

function add(a: string | number | null, b?: string | number ) {
  return a + b;
}

add(null, undefined); // non Strict
add(null); // non Strict

add(1, 2);
add('Alice', 'has a cat');
