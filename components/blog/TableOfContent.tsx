"use client";

import { Heading } from "@/types/tableOfContent";
import { isChildActive } from "@/utils";
import { useEffect, useState } from "react";
import AnimateHeight from "react-animate-height";
import { IoList } from "react-icons/io5";

const TableOfContent = ({
  headings,
  allHeadings,
}: {
  headings: Heading[];
  allHeadings: Heading[];
}) => {
  const [activeId, setActiveId] = useState<string>("");

  const isActive = "text-primary";

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "0px 0px -90% 0px" }
    );

    allHeadings.forEach((heading) => {
      const headingElement = document.getElementById(heading.id);

      if (headingElement) {
        observer.observe(headingElement);
      }
    });

    return () => {
      allHeadings.forEach((heading) => {
        const headingElement = document.getElementById(heading.id);
        if (headingElement) {
          observer.unobserve(headingElement);
        }
      });
    };
  }, [allHeadings]);

  return (
    <nav className="flex flex-col gap-4">
      <div className="flex gap-2 items-center">
        <IoList className="w-6 h-6" />
        <p>On this page</p>
      </div>
      <ul className="flex flex-col gap-3">
        {headings.map((heading) => (
          <li key={heading.id}>
            <a
              href={`#${heading.id}`}
              className={activeId === heading.id ? isActive : ""}
            >
              {heading.title}
            </a>
            {heading.children.length > 0 && (
              <TableOfContentSubList
                headings={heading.children}
                activeId={activeId}
                parent={heading}
              />
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TableOfContent;

const TableOfContentSubList = ({
  headings,
  activeId,
  parent,
}: {
  headings: Heading[];
  activeId: string;
  parent: Heading;
}) => {
  const isActive =
    "text-primary before:border-l before:border-l-primary before:w-[1px] before:h-full before:absolute before:top-0 before:-left-[17px]";

  const visited = new Set<string>();

  return (
    // expand sub list if the current heading is active or one of its children heading is active
    <AnimateHeight
      duration={300}
      animateOpacity={true}
      height={
        activeId === parent.id || isChildActive(parent, activeId, visited)
          ? "auto"
          : 0
      }
    >
      <ul className="border-l border-l-zinc-800 text-zinc-400 flex flex-col gap-3 mt-3">
        {headings.map((heading) => (
          <li key={heading.id} className="pl-4">
            <a
              href={`#${heading.id}`}
              className={`block relative ${
                activeId === heading.id ? isActive : ""
              }`}
            >
              {heading.title}
            </a>
            {heading.children.length > 0 && (
              <TableOfContentSubList
                headings={heading.children}
                activeId={activeId}
                parent={heading}
              />
            )}
          </li>
        ))}
      </ul>
    </AnimateHeight>
  );
};
