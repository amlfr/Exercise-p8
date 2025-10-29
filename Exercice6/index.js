const clearDisplay = () => {
  const display = document.getElementById('display');
  display.value = '';
};

const appendToDisplay = (str) => {
  const display = document.getElementById('display');
  display.value = display.value + str;
};

const calculateResult = () => {
  const display = document.getElementById('display');
  const result = eval(display.value);
  if (!isFinite(result)) {
    display.value = 'Division by zero is not allowed';
  } else {
    display.value = eval(display.value);
  }
};
