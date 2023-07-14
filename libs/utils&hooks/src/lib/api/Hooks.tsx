import React from "react";
import {
  UseQueryOptions,
  useQuery,
  QueryKey,
  QueryClientProvider,
  QueryClient
} from "@tanstack/react-query";
import { WorldTime } from "@/lib/types";


const queryClient = new QueryClient();
export const UtilsAndHooksQueryClientProvider = ({ children }: { children: React.ReactNode }) => (
  <QueryClientProvider client={ queryClient }>
    { children }
  </QueryClientProvider>
);

type QueryOptions<T, R> = Omit<UseQueryOptions<T, R, T, QueryKey>, "queryKey" | "queryFn"> | undefined;

interface UseEntitiesProps<T, R> {
  queryOptions?: QueryOptions<T, R>;
}

const WORLD_TIME_CACHE = "worldtime";

interface UseWorldTimeProps<T, R> extends UseEntitiesProps<T, R> {
  timezone: string;
}

/**
 * Request the world time from the worldtimeapi.org API using the timezone provided
 * @exception To use this hook you have to provide UtilsAndHooksQueryClientProvider in the root of your app
 * @param timezone
 * @param queryOptions
 */
export const useWorldTime = ({ timezone, queryOptions }: UseWorldTimeProps<WorldTime, WorldTime>) => {
  const options: QueryOptions<WorldTime, WorldTime> = {
    ...queryOptions,
    cacheTime: 0
  };

  return useQuery(
    [WORLD_TIME_CACHE, timezone],
    async () => {
      const response = await fetch(`http://worldtimeapi.org/api/ip/${ timezone }`);
      const data = await response.json();
      return data;
    },
    options
  );
};
