// 时间轴组件
const TimelineItem = ({ date, content }: { date: string; content: string }) => (
  <div className="relative pl-8 before:absolute before:left-0 before:h-full before:w-0.5 before:bg-blue-500">
    <div className="absolute left-[-5px] top-0 w-4 h-4 bg-blue-500 rounded-full" />
    <time className="text-sm text-gray-500 dark:text-gray-400">{date}</time>
    <p className="mt-2 text-gray-700 dark:text-gray-300">{content}</p>
  </div>
);

export default TimelineItem;
