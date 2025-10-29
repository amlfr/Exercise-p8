const convertToBinary = () => {
  const number = document.getElementById('decimalInput').value;
  console.log('fire', parseFloat(number));
  if (typeof Number(number) !== 'number') return;

  let binaryResult = '';
  let startNumber = Number(number);
  let currentNumber = startNumber;
  console.log(currentNumber);
  while (currentNumber > 0) {
    console.log(currentNumber);
    const remainder = currentNumber % 2;
    const nextNumber = parseInt(currentNumber / 2);
    binaryResult += remainder;
    currentNumber = nextNumber;
  }
  const p = document.getElementById('binaryResult');
  console.log(binaryResult);
  console.log(binaryResult.split().reverse().join());
  p.textContent = binaryResult.split('').reverse('').join('');
};
