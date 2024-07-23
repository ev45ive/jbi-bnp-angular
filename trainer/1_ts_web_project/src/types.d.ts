import React from 'react'; // Extend @types/react
declare module 'react' {
  export const pancakes: 123;

  export type Bananas = 'Banana';

  export declare function createElement(text: 'banana'): any;
}

declare global {
  let someGlobal = `123`;

  interface Window {
    globalBanana: (text: 123) => void;
  }
}
