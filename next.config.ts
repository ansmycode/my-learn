import type { NextConfig } from "next";
import remarkGfm from "remark-gfm"; // GitHub Flavored Markdown 插件
import createMDX from "@next/mdx";
import rehypeHighlight from "rehype-highlight"; // 代码高亮插件
import rehypeCodeTitles from "rehype-code-titles";
const nextConfig: NextConfig = {
  /* config options here */
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
};

// 使用createMDX并配置插件
// 部分插件与turbopack冲突 , 使用插件时使用自定义的启动项npm run devnwt
const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      [rehypeCodeTitles, {}],
      [
        rehypeHighlight,
        {
          ignoreMissing: true,
          languages: {
            typescript: require("highlight.js/lib/languages/typescript"),
            bash: require("highlight.js/lib/languages/bash"),
          },
        },
      ],
    ],
  },
});
export default withMDX(nextConfig);
