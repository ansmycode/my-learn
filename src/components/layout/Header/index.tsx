import Link from "next/link";
import Logo from "../../../../public/Logo.svg";
import Image from "next/image";
// import ThemeToggle from "./ThemeToggle"; // 暗黑模式切换组件

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50  bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16 justify-between">
          {/* 左侧Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold dark:text-white">TechLab</span>
          </Link>

          {/* 右侧导航菜单 */}
          <nav className="hidden md:flex space-x-8">
            <Link
              href="/docs"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600"
            >
              知识笔记
            </Link>
            <Link
              href="/lab"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600"
            >
              Code Lab
            </Link>
            <Link
              href="/about"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600"
            >
              关于
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

// SVG图标组件
// function CodeBracketIcon(props: React.SVGProps<SVGSVGElement>) {
//   return (

//   );
// }
