import { Heading } from "@/types";
import React from "react";
import { IoList } from "react-icons/io5";

const MobileTableofContent = ({ headings }: { headings: Heading[] }) => {
  return (
    <nav className="flex flex-col h-fit gap-4 max-h-[640px] overflow-auto bg-secondary shadow shadow-black/40 p-6 rounded-xl md:hidden">
      <div className="flex gap-2 items-center">
        <IoList className="w-6 h-6" />
        <p>On this page</p>
      </div>
      <ul className="flex flex-col gap-3">
        {headings.map((heading) => (
          <li key={heading.id}>
            <a href={`#${heading.id}`}>{heading.title}</a>
            {heading.children.length > 0 && (
              <TableOfContentSubList headings={heading.children} />
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MobileTableofContent;

const TableOfContentSubList = ({ headings }: { headings: Heading[] }) => {
  return (
    <ul className="border-l border-l-zinc-800 text-zinc-400 flex flex-col gap-3 mt-3">
      {headings.map((heading) => (
        <li key={heading.id} className="pl-4">
          <a href={`#${heading.id}`} className="block relative">
            {heading.title}
          </a>
          {heading.children.length > 0 && (
            <TableOfContentSubList headings={heading.children} />
          )}
        </li>
      ))}
    </ul>
  );
};
