//방법1
// const animalModule = require('./animals');

// console.log(animalModule.animals);
// animalModule.showAnimals();

//방법2 구조분해할당
// const { animals, showAnimals } = require('./animals');
// console.log(animals);
// showAnimals();

//실습
const { student, showStudent } = require('./student');
console.log(student);
showStudent();
