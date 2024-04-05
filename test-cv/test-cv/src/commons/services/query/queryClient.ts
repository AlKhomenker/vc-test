import { QueryClient } from "@tanstack/react-query";

enum QueryStaleTime {
  DEFAULT_TIME = 10000,
}

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: QueryStaleTime.DEFAULT_TIME,
    },
  },
});
