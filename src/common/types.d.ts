interface DocsMenuItem {
  name: string;
  path: string;
  title: string;
  description: string;
  tags: Array<string>;
  state: "Pendding" | "InProgress" | "Completed";
}

interface DocsMenu {
  key: number;
  title: string;
  items: Array<DocsMenuItem>;
}
