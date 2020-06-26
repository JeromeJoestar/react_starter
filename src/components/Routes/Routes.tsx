import React, { FC, Suspense } from "react";
import { Route, Switch } from "react-router";

import { Home } from "@src/components/Home";
import { Loading } from "@src/components/Loading";
import { MainNavigation } from "@src/components/MainNavigation";
import { NotFound } from "@src/components/NotFound";
import { Sample } from "../SamplePage";

export const Routes: FC = () => (
  <>
    <MainNavigation />
    <div>
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/sample" exact>
            <Sample />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </Suspense>
    </div>
  </>
);
