import { createContext, useContext, useEffect, useState } from "react";

const ErrorContextDelay = 20000;

export interface I_ErrorContext {
  error: Error | null;
  setError: (error: Error | null) => void;
}

const ErrorContext = createContext<I_ErrorContext | undefined>(undefined);

export const useErrorContext = () => {
  const context = useContext(ErrorContext);
  if (!context) {
    throw new Error("useError must be used within an ErrorProvider");
  }
  return context;
};

export const ErrorProvider = ({ children }: any) => {
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setError(null);
    }, ErrorContextDelay);

    return () => clearTimeout(timeout);
  }, [error]);

  return (
    <ErrorContext.Provider value={{ error, setError }}>
      {children}
    </ErrorContext.Provider>
  );
};
