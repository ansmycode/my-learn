// app/page.tsx
"use client";

import { useState, useEffect } from "react";
import { docsMenu } from "@/common/common";

export default function Home() {
  const [experiments] = useState(
    docsMenu
      .flatMap((section) => section.items)
      .filter(
        (item) => item.state === "InProgress" || item.state === "Pendding"
      )
  );

  // 手动实现滚动动画
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section - 纯CSS动画 */}
      <section
        className={`pt-20 pb-16 px-4 text-center transition-opacity duration-1000 ${
          mounted ? "opacity-100" : "opacity-0"
        }`}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-gradient">
          Cat's Web Lab
          <span className="block text-xl mt-4 text-gray-600 dark:text-gray-300">
            记录每一次技术拆解实验
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400 mb-12">
          这里没有完美的解决方案，只有真实的实践过程。每个实验都始于"Why"的疑问，成于反复试错。
        </p>
      </section>

      {/* 实验项目展示 - 纯CSS悬停效果 */}
      <section className="max-w-6xl mx-auto px-4 pb-20">
        <h2 className="text-2xl font-bold mb-8 text-gray-800 dark:text-gray-200">
          最近的实验
          <span className="ml-2 text-sm text-blue-500 animate-pulse">
            进行中
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {experiments.map((exp, index) => (
            <a
              key={exp.title}
              href={exp.path}
              className="group bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200 group-hover:text-blue-500 transition-colors">
                    {exp.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full transition-colors hover:bg-blue-200 dark:hover:bg-blue-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="ml-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-2xl">→</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* 技术日志时间轴 - 纯CSS实现 */}
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-gray-800 dark:text-gray-200">
            实践笔记
          </h2>

          <div className="space-y-8">
            <TimelineItem
              date="2024.04.20"
              content="发现useMemo的缓存策略并不是银弹，当依赖项频繁变化时反而会增加开销..."
            />
            <TimelineItem
              date="2024.04.18"
              content="手动实现Promise时，对微任务队列有了更直观的理解..."
            />
          </div>
        </div>
      </section>
    </div>
  );
}

// 时间轴组件 - 纯CSS实现
const TimelineItem = ({ date, content }: { date: string; content: string }) => (
  <div className="relative pl-8 before:absolute before:left-0 before:h-full before:w-0.5 before:bg-blue-500">
    <div className="absolute left-[-5px] top-0 w-4 h-4 bg-blue-500 rounded-full" />
    <time className="text-sm text-gray-500 dark:text-gray-400">{date}</time>
    <p className="mt-2 text-gray-700 dark:text-gray-300">{content}</p>
  </div>
);
