import { PageInfo } from "@/types";
import Link from "next/link";

const Pagination = ({ pageInfo }: { pageInfo: PageInfo }) => {
  const disabled = "pointer-events-none opacity-50";
  return (
    <div className="flex gap-8 justify-center items-center pt-24">
      <Link
        href={{
          pathname: "/blog",
          query: {
            before: pageInfo.startCursor,
          },
        }}
        scroll={false}
        className={`${
          !pageInfo.hasPreviousPage && disabled
        } bg-secondary px-6 py-3 rounded-lg duration-300 hover:bg-primary text-sm sm:text-base`}
      >
        Previous
      </Link>

      <Link
        href={{
          pathname: "/blog",
          query: {
            after: pageInfo.endCursor,
          },
        }}
        scroll={false}
        className={`${
          !pageInfo.hasNextPage && disabled
        } bg-secondary px-6 py-3 rounded-lg duration-300 hover:bg-primary text-sm sm:text-base`}
      >
        Next
      </Link>
    </div>
  );
};

export default Pagination;
