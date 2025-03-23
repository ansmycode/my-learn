"use client";

import ThinkText from "@/components/ThinkText";
import { useState, useMemo } from "react";

const Demo2 = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div>
      <h2 className="text-2xl mb-10 mt-10">
        <b>2.一些不太寻常的例子</b>
      </h2>
      <ThinkText>
        <p>
          如果你通过跳过复杂计算与不必要渲染,那么恭喜你已经理解基本的useMemo用法,所以接下来我会用到几个不太寻常的例子
        </p>
      </ThinkText>

      <ThinkText></ThinkText>
    </div>
  );
};

export default Demo2;
