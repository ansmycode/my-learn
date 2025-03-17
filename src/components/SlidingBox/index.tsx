"use client";

import {
  useState,
  useRef,
  useEffect,
  Children,
  ReactNode,
  HTMLAttributes,
} from "react";
import { debounce } from "@/utils/common";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PagedSliderProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  itemsPerPage?: number;
  spacing: string;
  diyClassName: string | "";
}

export default function PagedSlider({
  children,
  itemsPerPage = 3,
  className,
  spacing,
  diyClassName,
  ...props
}: PagedSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentPage, setCurrentPage] = useState(0); //当前处于页数
  const [maxPages, setMaxPages] = useState(0); //最大页数
  const [cardWidth, setCardWidth] = useState(0); //子元素宽度
  // 计算布局参数
  const calculateLayout = () => {
    if (!containerRef.current) return;

    const containerWidth = containerRef.current.offsetWidth;
    const gap = parseInt(getComputedStyle(containerRef.current).gap) || 0;
    const calculatedWidth =
      (containerWidth - gap * (itemsPerPage - 1)) / itemsPerPage;

    setCardWidth(calculatedWidth);
    setMaxPages(Math.ceil(Children.count(children) / itemsPerPage) - 1);
  };

  // 响应式布局更新
  useEffect(() => {
    calculateLayout();
    window.addEventListener("resize", debounce(calculateLayout, 100));
    return () => window.removeEventListener("resize", calculateLayout);
  }, [children]);

  // 导航控制
  const scrollToPage = (page: number) => {
    if (!containerRef.current) return;

    const gap = parseInt(getComputedStyle(containerRef.current).gap) || 0;
    const scrollPosition = (cardWidth + gap) * itemsPerPage * page;

    containerRef.current.scrollTo({
      left: scrollPosition,
      behavior: "smooth",
    });

    setCurrentPage(page);
  };

  const childrenArray = Children.toArray(children).map((child, index) => (
    <div
      key={index}
      className={`flex-none snap-start w-${cardWidth}px ${diyClassName} mt-4 mb-4`}
    >
      {child}
    </div>
  ));

  return (
    <div className={`relative ${className || ""}`} {...props}>
      {/* 内容容器 */}
      <div
        ref={containerRef}
        className={`flex overflow-x-auto scrollbar-hide snap-x snap-mandatory ${spacing}`}
      >
        {childrenArray}
      </div>

      {/* 导航箭头 */}
      {currentPage > 0 && (
        <button
          onClick={() => scrollToPage(currentPage - 1)}
          className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-gray-800/30 hover:bg-gray-800/50 backdrop-blur-sm rounded-full transition-colors"
        >
          <ChevronLeft className="text-white w-6 h-6" />
        </button>
      )}

      {currentPage < maxPages && (
        <button
          onClick={() => scrollToPage(currentPage + 1)}
          className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-gray-800/30 hover:bg-gray-800/50 backdrop-blur-sm rounded-full transition-colors"
        >
          <ChevronRight className="text-white w-6 h-6" />
        </button>
      )}
    </div>
  );
}
