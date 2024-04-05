import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClientProvider } from "@tanstack/react-query";
import { AppRouter } from "./commons/routers/AppRouter";
import { queryClient } from "./commons/services/query/queryClient";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ErrorProvider } from "./commons/context/useErrorContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ErrorProvider>
      <QueryClientProvider client={queryClient}>
        <AppRouter />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </ErrorProvider>
  </React.StrictMode>
);
