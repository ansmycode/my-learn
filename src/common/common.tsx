// 侧边栏目录结构配置

export const docsMenu: Array<DocsMenu> = [
  {
    key: 1,
    title: "JavaScript核心",
    items: [
      {
        name: "Promise实现",
        path: "/docs/promise",
        title: "Promise 生命周期可视化1",
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

export const DemoMenu: Array<any> = [
  {
    key: 1,
    title: "JavaScript核心",
    items: [
      {
        name: "Promise Lab",
        path: "/lab/promise",
      },
    ],
  },
  {
    key: 2,
    title: "React进阶",
    items: [
      {
        name: "useMemo Lab",
        path: "/lab/useMemo",
      },
    ],
  },
];

export const HomeDescList = [
  {
    title: "What?",
    QandA: [
      {
        questions: `这是一个怎样的存在？`,
        answers: (
          <div className="space-y-4">
            <p>
              🎮 这是我的<b>技术游乐园</b>，也可以叫做<b>代码实验场</b>。
            </p>
            <p>在这里，具现化每一个在成长之路学到的知识</p>
            <ul className="list-disc pl-6">
              <li>React Hook的解析与运用</li>
              <li>JavaScript的核心知识</li>
              <li>各类所见所遇功能的思索与复刻</li>
            </ul>
            <p>
              这不是一个完美无瑕的作品集，而是一段<b>可见成长轨迹</b>
              的诚实记录。
            </p>
          </div>
        ),
      },
      {
        questions: `这是否算一份教程？`,
        answers: (
          <div className="space-y-4">
            <p>
              ❌
              无论是知识点的理解还是实践demo的代码编写都非完美，这是我从我的视角出发的“一己之见”，所以比起教程它更像是一份技术的沉淀
            </p>
          </div>
        ),
      },
    ],
  },
  {
    title: "Why?",
    QandA: [
      {
        questions: `为何构建这个实验室？`,
        answers: (
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="flex-1">
                <h4 className="font-bold">No Why</h4>
                <p>一名开发者想要记录自己的成长之路，仅此而已。</p>
                <blockquote className="text-xs italic text-gray-600 mt-3">
                  就像我早就提及过的这不是一份教程，但是如果你在这个项目中或多或少的学到或者收获到什么的话，那就再好不过了。
                </blockquote>
              </div>
            </div>
          </div>
        ),
      },
      {
        questions: `为何选择开源呈现？`,
        answers: (
          <div className="space-y-4">
            <p>
              📖 因为<b>不完美的代码值得被看见</b>：
            </p>
            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div className="p-4 bg-green-50 rounded-lg">
                <div className="text-2xl">🛠️</div>
                <h4 className="font-bold mt-2">技术考古</h4>
                <p className="text-sm">旧代码是成长的年轮</p>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg">
                <div className="text-2xl">🎯</div>
                <h4 className="font-bold mt-2">模式提炼</h4>
                <p className="text-sm">从重复错误中抽象规律</p>
              </div>
              <div className="p-4 bg-yellow-50 rounded-lg">
                <div className="text-2xl">🌱</div>
                <h4 className="font-bold mt-2">启发他人</h4>
                <p className="text-sm">我的弯路可能成为你的捷径</p>
              </div>
            </div>
          </div>
        ),
      },
    ],
  },
  {
    title: "Worth?",
    QandA: [
      {
        questions: `这个项目的价值所在？`,
        answers: (
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
              <div>
                <p className="mb-3">
                  🙋‍♂️
                  <b className="mr-2">对我个人而言</b>
                  这是一份技术的沉淀，是我来过这个领域的证明。
                </p>
                <p>
                  🙆‍♂️
                  <b className="mr-2">对他人而言</b>
                  抛砖引玉，使初学者通过一个个实验demo更好的理解一些抽象概念知识。
                </p>
              </div>
            </div>
          </div>
        ),
      },
    ],
  },
];
