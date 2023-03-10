//방법2 commonJS
const animals = ['puppy', 'cat'];
exports.animals = animals;
exports.showAnimals = function showAnimals() {
  animals.map((el) => console.log(el));
};

//방법 1 commonJS
// const animals = ['puppy', 'cat'];
// function showAnimals() {
//   animals.map((el) => console.log(el));
// };
// module.exports = {
//   animals,
//   showAnimals
// }
