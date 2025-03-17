import DocsSidebar from "@/components/layout/Sidebar";
import { DemoMenu } from "@/common/common";
import { ReactNode } from "react";

export default function DocsLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-1 overflow-hidden">
      <DocsSidebar menuList={DemoMenu} />

      <div className="flex-1 overflow-auto p-4 bg-gray-50 dark:bg-gray-900">
        {children}
      </div>
    </div>
  );
}
