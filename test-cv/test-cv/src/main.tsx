import React from "react";
import ReactDOM from "react-dom/client";
import { ErrorProvider } from "./commons/context/useErrorContext";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./commons/services/query/queryClient";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { AppRouter } from "./commons/routers/AppRouter";
import "./style.css";

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
