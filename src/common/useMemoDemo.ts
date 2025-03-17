export function calculateTotal(items: Array<any>, coupon: number) {
  const totalPrice = items.reduce(
    (prevValue, item) => prevValue + item.price,
    0
  );
  let startTime = performance.now();
  console.log("calculateTotal运行");
  while (performance.now() - startTime < 1000) {
    // 在 1000 毫秒内不执行任何操作以模拟极慢的代码
  }

  return totalPrice * coupon;
}

export function createGoods() {
  const goods = [];
  for (let i = 0; i < 10; i++) {
    goods.push({
      id: i,
      text: "goods " + (i + 1),
      price: 10 + i,
    });
  }
  return goods;
}
