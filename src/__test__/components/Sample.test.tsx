import React from "react";
import { MemoryRouter, Route } from "react-router-dom";
import { cleanup, render } from "test-utils";

import { Sample } from "@src/components/SamplePage";
import { SampleContext } from "@src/contexts/SampleContext";

// mock window location
const originalWindow = window.location;
delete window.location;
window.location = {
  ...originalWindow,
  pathname: "/",
};

afterEach(() => {
  cleanup();
});

test("displays correct login message in ", async () => {
  const { findByText } = render(
    <MemoryRouter>
      <SampleContext.Provider value={{ user: { firstName: "Test" } } as any}>
        <Route>
          <Sample />
        </Route>
      </SampleContext.Provider>
    </MemoryRouter>
  );

  const emptyCartText = await findByText("This displays if hook state is true for Test", {}, { timeout: 5000 });
  expect(emptyCartText).toBeInTheDocument();
});

test("displays Sample page", async () => {
  const { findByText, getAllByText } = render(
    <MemoryRouter>
      <Route>
        <Sample />
      </Route>
    </MemoryRouter>
  );

  await findByText("Sample Page");

  expect(getAllByText("Sample Page").length).toBe(1);
});
