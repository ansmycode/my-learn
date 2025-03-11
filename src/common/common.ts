// 侧边栏目录结构配置

export const docsMenu: Array<DocsMenu> = [
  {
    key: 1,
    title: "JavaScript核心",
    items: [
      {
        name: "Promise实现",
        path: "/docs/promise",
        title: "Promise 生命周期可视化",
        description: "终于看清微任务队列的执行顺序",
        tags: ["JavaScript", "异步"],
        state: "Pendding",
      },
    ],
  },
  {
    key: 2,
    title: "React进阶",
    items: [
      {
        name: "useMemo原理",
        path: "/docs/useMemo",
        title: "useMemo 缓存实验",
        description: "当数字达到5位数时，性能差异开始显现",
        tags: ["React", "性能优化"],
        state: "Pendding",
      },
    ],
  },
];
