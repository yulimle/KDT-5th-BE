// @ts-check
const { it } = require('node:test');

function buySync(item, price, quantity, callback) {
  console.log(`${item} 상품을 ${quantity}개 골라서 점원에게 주었습니다.`);
  setTimeout(() => {
    console.log('계산이 필요합니다.');
    const total = price * quantity;
    callback(total);
  }, 1000);
}

// function pay(total) {
//   console.log(`${total} 원을 지불하였습니다.`);
// }

// buySync(`포켓몬빵`, 1000, 5, pay);
buySync('포켓몬빵', 1000, 5, function (total) {
  console.log(`${total} 원을 지불하였습니다.`);
});
