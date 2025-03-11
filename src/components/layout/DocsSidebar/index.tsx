"use client"; // 需客户端交互
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";
import { docsMenu } from "@/common/common";

export default function DocsSidebar() {
  const pathname = usePathname();
  const [menuList] = useState(docsMenu);
  const [menuActiveList, setMenuActiveList]: Array<any> = useState([2]);
  console.log(menuActiveList);
  return (
    <aside className="w-48 border-r bg-white dark:bg-gray-800 overflow-y-auto">
      <nav className="pt-4 pb-4">
        {menuList.map((section: DocsMenu) => (
          <div key={section.key} className="mb-6">
            <h3
              className="flex text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2 cursor-pointer items-center"
              onClick={() => {
                if (menuActiveList.includes(section.key)) {
                  setMenuActiveList(() =>
                    menuActiveList.filter(
                      (item: number) => item !== section.key
                    )
                  );
                } else {
                  setMenuActiveList([...menuActiveList, section.key]);
                }
              }}
            >
              <svg
                width="6"
                height="10"
                viewBox="0 0 6 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`mr-3 transition-transform ${
                  menuActiveList.includes(section.key) ? "rotate-90" : ""
                }`}
              >
                <path
                  d="M1.4 8.56L4.67 5M1.4 1.23L4.66 4.7"
                  stroke="#999"
                  strokeLinecap="square"
                ></path>
              </svg>

              <span>{section.title}</span>
            </h3>
            {menuActiveList.includes(section.key) ? (
              <ul className="space-y-1">
                {section.items.map((item) => (
                  <li key={item.path}>
                    <Link
                      href={item.path}
                      className={`flex ml-3 px-3 py-2 rounded-lg ${
                        pathname === item.path
                          ? "bg-blue-100 text-blue-600 dark:bg-gray-700"
                          : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                      }`}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        ))}
      </nav>
    </aside>
  );
}
