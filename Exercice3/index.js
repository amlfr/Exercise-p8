// Créez votre fonction ici

const calculateAverage = (array) => {
  if (Array.isArray(array) === false) return 'No numbers to calculate average';
  const initialValue = 0;
  const sumWithInitial = array.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue,
  );
  return sumWithInitial / array.length;
};

// Exemples d'utilisation de la fonction
console.log(calculateAverage([5, 10, 15])); // retourne 10
console.log(calculateAverage([10, 20, 30, 20])); // retourne 20
console.log(calculateAverage()); // No numbers to calculate average

export default calculateAverage;
