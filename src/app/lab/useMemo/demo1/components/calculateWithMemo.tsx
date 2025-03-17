"use client";
import { useMemo, useState } from "react";
import { calculateTotal, createGoods } from "@/common/useMemoDemo";

export default function CalculateWithMemo() {
  const [items, setItems] = useState(createGoods());
  const [coupon, setCoupon] = useState(0.5);
  const [address, setAddress] = useState(0);

  // 使用 useMemo 优化
  let total = useMemo(() => {
    console.log("重新计算总价,使用Memo");
    return calculateTotal(items, coupon);
  }, [items, coupon]); // 仅当 items 或 coupon 变化时重新计算

  return (
    <div>
      <div className="flex gap-4 mb-10">
        <button
          className="w-30 h-13 bg-red-200 rounded-md text-base"
          onClick={() => setCoupon(0.4)}
        >
          改变折扣
        </button>
        <button
          className="w-30 h-13 bg-blue-200 rounded-md text-base"
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
          className="w-30 h-13 bg-gray-200 rounded-md text-base"
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
