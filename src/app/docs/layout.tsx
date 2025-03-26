import Sidebar from "@/components/layout/Sidebar";
import { docsMenu } from "@/common/common";
import { ReactNode } from "react";

export default function DocsLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-1 overflow-hidden">
      <Sidebar menuList={docsMenu} />
      <div className="flex-1 overflow-auto  bg-gray-50 dark:bg-gray-900 w-80 max-w-6xl ml-48 mx-auto p-10 rounded-lg shadow-lg ">
        {children}
      </div>
    </div>
  );
}
