import { render } from "@testing-library/react";
import React from "react";
import { HelmetProvider } from "react-helmet-async";

const AllProviders = ({ children }) => (
  // Useful if you have a large amount fo providers just wrap them all here
  <HelmetProvider>{children}</HelmetProvider>
);

const customRender: typeof render = (ui, options?) => render(ui, { wrapper: AllProviders, ...options });

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };
