"use client";
import { useState } from "react";
import { calculateTotal, createGoods } from "@/common/useMemoDemo";

export default function CalculateWithOutMemo() {
  const [items, setItems] = useState(createGoods());
  const [coupon, setCoupon] = useState(0.5);
  const [address, setAddress] = useState(0);

  // 未优化 - 每次渲染都计算
  let total = calculateTotal(items, coupon);

  return (
    <div>
      <div className="flex gap-4 mb-10">
        <button
          className="w-30 h-20 bg-amber-300"
          onClick={() => setCoupon(0.4)}
        >
          改变折扣
        </button>
        <button
          className="w-30 h-20 bg-amber-300"
          onClick={() =>
            setItems([
              ...items,
              {
                id: items.length + 1,
                text: "goods " + (items.length + 1),
                price: 10 + items.length,
              },
            ])
          }
        >
          添加新商品
        </button>
        <button
          className="w-30 h-20 bg-amber-300"
          onClick={() => setAddress(address + 1)}
        >
          改变地址
        </button>
      </div>

      <h2>总价: {total}</h2>
      <h2>地址: {address}</h2>

      {/* 性能指标看板 */}
      {/* <div className="grid grid-cols-2 gap-4 text-sm">
        <div className="p-2 bg-gray-100 rounded">
          计算次数: {useMemoEnabled ? "按需计算" : "每次渲染"}
        </div>
        <div className="p-2 bg-gray-100 rounded">
          组件渲染次数: {renderCount.current}
        </div>
      </div> */}
    </div>
  );
}
