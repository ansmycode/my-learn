"use client";

import CalculateWithOutMemo from "./components/calculateWithOutMemo";
import CalculateWithMemo from "./components/calculateWithMemo";
import ThinkText from "@/components/ThinkText";
import { useState } from "react";

const Demo1 = () => {
  const [demo1IsUseMemo, setDemo1IsUseMemo] = useState(false);
  return (
    <div>
      <h2 className="text-2xl mb-10 mt-10">
        <b>1.跳过代价昂贵的重新计算</b>
      </h2>
      <ThinkText className={`mb-7`}>
        <p className="mb-5">
          💡首先来看第一个例子,就如同字面意义上的使用useMemo在依赖项没有改变时跳过这个计算函数
        </p>

        <p>
          我们都知道React函数组件在每次重新渲染时都会重新执行整个函数体,既然是跳过这个计算函数,那么我就可以重点关注以下两点(按下F12以在控制台查看log)
        </p>
        <ul>
          <li className="mt-2 mb-2">
            🔎 <b>calculateTotal是否运行</b>
          </li>
          <li className="mt-2 mb-2">
            🔎 <b>页面重新渲染时花费的时长</b>
          </li>
        </ul>
      </ThinkText>
      {/* 控制开关 */}
      <div className="flex items-center gap-2 mb-4">
        <label className="switch">
          <input
            type="checkbox"
            checked={demo1IsUseMemo}
            onChange={(e) => setDemo1IsUseMemo(e.target.checked)}
          />
        </label>
        <span className="text-sm">
          {demo1IsUseMemo ? "✅ useMemo 已启用" : "❌ useMemo 已禁用"}
        </span>
      </div>
      {demo1IsUseMemo ? <CalculateWithMemo /> : <CalculateWithOutMemo />}
    </div>
  );
};

export default Demo1;
