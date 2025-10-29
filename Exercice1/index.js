//votre code ici

const pairNumbers = (min, max) => {
  let str = '';
  for (let i = min; i <= max; i++) {
    if (i % 2 == 0) {
      if (str !== '') {
        str += ',';
      }
      str += i;
    }
  }
  return str;
};

export default pairNumbers;
