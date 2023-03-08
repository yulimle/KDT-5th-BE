// function func1(callback) {
//   console.log('1번함수');

//   function fakeFunc3() {
//     console.log('3번인척 하는 함수');
//   }
//   callback(fakeFunc3);
// }

// function func2(callback) {
//   console.log('2번함수');
//   callback();
// }

// function func3() {
//   console.log('3번함수');
// }

// func1(function () {
//   console.log('2번인척하는 새로만든 익명함수');
// });

function mutiplication(number, callback) {
  let answer = 0;
  setTimeout(function () {
    answer = number * number;
    callback(answer);
  }, 2000);
}

function say(result) {
  console.log(result);
}

mutiplication(3, say);
