import { UseQueryOptions, useQuery, QueryKey } from "@tanstack/react-query";
import { WorldTime } from "@/models/WorldTimeModels";

type QueryOptions<T, R> = Omit<UseQueryOptions<T, R, T, QueryKey>, "queryKey" | "queryFn"> | undefined;

interface UseEntitiesProps<T, R> {
    queryOptions?: QueryOptions<T, R>;
}

const WORLD_TIME_CACHE = "worldtime"

interface UseWorldTimeProps<T, R> extends UseEntitiesProps<T, R> {
    timezone: string;
}
export const useWorldTime = ({ timezone, queryOptions }: UseWorldTimeProps<WorldTime, WorldTime>) =>
    useQuery(
        [WORLD_TIME_CACHE, timezone],
        async () => {
            const response = await fetch(`http://worldtimeapi.org/api/ip/${ timezone }`);
            const data = await response.json();
            return data;
        },
        queryOptions
    );

