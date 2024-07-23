export const updateTitle = (text: string) => {
  // HTMLHeadingElement | null
  const h1Elem = document.querySelector('h1');

  (h1Elem as any).innerHTML = 'Anyying?';
  (h1Elem as HTMLHeadingElement).innerHTML = 'Anyying?';
  h1Elem!.innerHTML = 'Anyying?'; // Lets Assume THERE IS NO NULL! ;-)

  // --- VS ---

  // 'h1' is possibly 'null'
  if (h1Elem) {
    h1Elem.innerHTML = 'Banana';
  }
  //   h1Elem?.innerHTML = 'Anyying?'; // cannot assign to null/undefined
};
