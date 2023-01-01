import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <h1 className="text-3xl text-center pt-5">Infinite Scroll</h1>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
