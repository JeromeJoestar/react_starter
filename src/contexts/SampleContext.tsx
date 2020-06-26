/* eslint-disable @typescript-eslint/no-empty-function */
import React, { FC } from "react";

interface SampleContext {
  loading: boolean;
  serverError: number | null;
  // Try not to use any type when possible, here only for sample
  user: any;
  login(): void;
  logout(): void;
  setLoading(value: boolean): void;
  setServerError(statusCode: number): void;
}

export const SampleContext = React.createContext<SampleContext>({
  loading: false,
  user: { firstName: "Test" },
  login: () => {},
  logout: () => {},
  serverError: null,
  setLoading: () => {},
  setServerError: () => {},
});

export const SampleProvider: FC = ({ children }) => {
  const [user, setUser] = React.useState({ firstName: "Test" });
  const [loading, setLoading] = React.useState(false);
  const [serverError, setServerError] = React.useState<number | null>(null);

  const login = () => {
    window.location.href = `/`;
  };

  const logout = () => {
    window.location.href = `/`;
  };

  return (
    <SampleContext.Provider
      value={{
        loading,
        login,
        logout,
        serverError,
        setLoading,
        setServerError,
        user,
      }}
    >
      {children}
    </SampleContext.Provider>
  );
};
