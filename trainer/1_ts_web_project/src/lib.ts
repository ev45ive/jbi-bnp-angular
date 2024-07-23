export const updateTitle = (text: string) => {

  // HTMLHeadingElement | null
  const h1Elem = document.querySelector('h1');

  // Element | null
  const divElem = document.querySelector('div.server')

//   (h1Elem as any).innerHTML = 'Anyying?';
//   (h1Elem as HTMLHeadingElement).innerHTML = 'Anyying?';
//   h1Elem!.innerHTML = 'Anyying?'; // Lets Assume THERE IS NO NULL! ;-)

  // --- VS ---

  // 'h1' is possibly 'null'
  if (h1Elem) {
    h1Elem.innerHTML = 'Hello from TypeScript';
  }
  //   h1Elem?.innerHTML = 'Anyying?'; // cannot assign to null/undefined
};
