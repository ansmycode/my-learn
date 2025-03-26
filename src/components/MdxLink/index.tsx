import NextLink from "next/link";
import { Link } from "lucide-react";
export function MdxTableLink({ src, str = "" }: { src: string; str?: string }) {
  return (
    <NextLink
      href={src}
      className="w-30 flex bg-gray-200 p-2 rounded-3xl  items-center justify-center text-sm hover:opacity-75 hover:text-blue-500"
    >
      <Link className=" rounded-4xl mr-1" />
      {str}
    </NextLink>
  );
}

export function MdxNormalLink({
  src,
  str = "",
}: {
  src: string;
  str?: string;
}) {
  return (
    <NextLink
      href={src}
      className=" 
      font-medium 
      text-lg
  text-slate-700 
  hover:text-cyan-600 
  relative 
  before:content-[''] 
  before:absolute 
  before:-bottom-1 
  before:left-0 
  before:w-0 
  before:h-[2px] 
  before:bg-cyan-500 
  hover:before:w-full 
  before:transition-all 
  before:duration-300"
    >
      {str}
    </NextLink>
  );
}
