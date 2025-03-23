"use client";

import CalculateWithOutMemo from "./components/calculateWithOutMemo";
import CalculateWithMemo from "./components/calculateWithMemo";
import ThinkText from "@/components/ThinkText";
import { useState } from "react";

const Demo1 = () => {
  const [demo1IsUseMemo, setDemo1IsUseMemo] = useState(false);
  return (
    <div>
      <h3 className="text-2xl mb-10 mt-10">
        <b>1.跳过代价昂贵的重新计算</b>
      </h3>
      <ThinkText>
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

      <ThinkText>
        <p>
          通过在控制台的log我们可以看见,当启用memo时在我们页面渲染时,跳过了这次的复杂计算,calculateTotal没有运行,地址的改变也非常的迅速没有被阻塞
        </p>
      </ThinkText>
      <ThinkText>
        <p>
          除了跳过复杂计算以外,useMemo还可以做到跳过不必要的渲染,列如当父组件中存在子组件时,子组件接收父组件里的数据,
          当父组件重新渲染时也会递归渲染父组件里的子组件内容,但是当我们使用React.memo配合useMemo
          就可以让子组件在props在没有改变时不重新渲染,这对于大量数据渲染的子组件来说无疑是极大的优化
        </p>
      </ThinkText>
      <ThinkText>
        <p>
          跳过渲染的代码与跳过计算的代码其实并无太大不同,只要你能理解第一个demo,那么跳过渲染这部分直接看React官方文档的例子同样直观了当
        </p>
      </ThinkText>
    </div>
  );
};

export default Demo1;
