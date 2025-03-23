"use client";
import DiyTitle from "@/components/DiyTitle";
import Skeleton from "@/components/Skeleton";
// import Demo1 from "./demo1/demo1";
import dynamic from "next/dynamic";

const Demo1 = dynamic(() => import("./demo1/demo1"), {
  loading: () => (
    <div>
      <Skeleton variant="text" count={4} />
      <Skeleton variant="rect" className="mt-4" />
    </div>
  ), // 高优先级骨架屏
  ssr: false,
});

const useMemoLab = () => {
  return (
    <div className="p-5 pl-25 pr-25 py-4 bg-white shadow-sm whitespace-pre-wrap break-words text-sm">
      <DiyTitle text={"useMemo"} />
      <Demo1 />
      <div className="w-80% h-px bg-gray-300 mb-4"></div>
    </div>
  );
};

export default useMemoLab;
