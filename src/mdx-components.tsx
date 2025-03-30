import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    // 关键包裹层
    wrapper: ({ children, ...props }) => {
      // 过滤非法 DOM 属性
      const safeProps = Object.fromEntries(
        Object.entries(props).filter(
          ([key]) =>
            // 保留合法属性 + 自定义数据属性
            key === "className" || key === "id" || key.startsWith("data-")
        )
      );

      return (
        <div {...safeProps} className="mdx-prose">
          {children}
        </div>
      );
    },
  };
}
