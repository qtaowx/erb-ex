// https://www.casper.tw/development/2020/10/16/async-await/

/**
 * 範例 Promise 函式
 * 
 * @param {Number} num 數值：作為判斷非同步成功與否的條件
 * @param {Number} [time=500] 數值：非同步所執行的時間長度
 * @returns 如果 num 為真則套用 resolve；失敗則套用 reject
 */
function promiseFn(num, time = 500) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        num ? resolve(`${num}, 成功`) : reject('失敗');
      }, time);
    });
}

promiseFn(1)
.then(res => {
  console.log(res); // 1, 成功
  return promiseFn(2); // 鏈接第二次的 Promise 方法
})
.then(res => {
  console.log(res); // 2, 成功
});