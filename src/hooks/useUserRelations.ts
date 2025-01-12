"use client"

import { PageResponse, UserInfo } from "@/app/api/users/[userId]/relations/followers/route";
import kyInstance from "@/lib/ky";
import { FollowerInfo } from "@/lib/type";
import { useInfiniteQuery, UseInfiniteQueryResult, useQuery, useQueryClient } from "@tanstack/react-query";

export default function useFollowers(
  userId: string
) {
  const followersQuery = useInfiniteQuery({
    queryKey: ['followers', userId],
    queryFn: ({ pageParam }) =>
        kyInstance
          .get(
          `/api/users/${userId}/relations/followers`,
            pageParam ? { searchParams: { cursor: pageParam } } : {},
          )
          .json<PageResponse<UserInfo>>(),
      initialPageParam: null as string | null,
    getNextPageParam: (lastPage) => lastPage.nextCursor,
  }) as UseInfiniteQueryResult<PageResponse<UserInfo>, Error>;

  return followersQuery;
}

