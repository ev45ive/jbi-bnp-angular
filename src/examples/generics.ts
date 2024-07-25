const arr1 = [1, 2, 3]; // number[]
const arr2 = ['alice', 'cat']; // Array<string>

type Box = { value: any };

function logAndReturn(value: any) {
  console.log(value);
  return value;
}
