type INdexedType = {
  // 345: string;
  //   [k in string]: string;
  [k in number]: string;
};

const someDIct: INdexedType = {};
someDIct[123] = 'banana';
someDIct['345'] = 'banana23';
// someDIct['etest'] = 'banana'; //

