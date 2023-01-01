import { useInfiniteQuery } from "@tanstack/react-query";
import { useRef } from "react";
import InfiniteScroll from "react-infinite-scroller";
import { Person } from "./Person";

export const InfinitePeople = () => {
  const scrollParentRef = useRef(null);
  const getPeople = async (url = import.meta.env.VITE_RICK_MORTY_API) => {
    const res = await fetch(url);
    return res.json();
  };

  const { data, fetchNextPage, hasNextPage, isLoading, isFetching, isError } =
    useInfiniteQuery({
      queryKey: ["people"],
      queryFn: ({ pageParam = import.meta.env.VITE_RICK_MORTY_API }) =>
        getPeople(pageParam),
      getNextPageParam: (lastPage) => lastPage.info.next,
    });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

  return (
    <div ref={scrollParentRef}>
      <InfiniteScroll
        loadMore={fetchNextPage}
        hasMore={!isFetching && hasNextPage}
      >
        {data?.pages.map((pageData) => {
          return pageData.results.map((person: any) => (
            <Person key={person.id} person={person} />
          ));
        })}
      </InfiniteScroll>
    </div>
  );
};
