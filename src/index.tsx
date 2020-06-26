// TODO: move polyfills to separate file or use cdn
import "core-js/stable";
import "regenerator-runtime/runtime";
import "url-search-params-polyfill";
import "whatwg-fetch";

// import FontFaceObserver from "fontfaceobserver";
import React from "react";
import * as ReactDOM from "react-dom";

import { App } from "@src/components/App";
import { SampleContext, SampleProvider } from "@src/contexts/SampleContext";
import { BrowserRouter } from "react-router-dom";
import { Loading } from "@src/components/Loading";

/*
Can
const fontObserver = new FontFaceObserver("museo-sans");
fontObserver.load().then(() => {
  document.documentElement.classList.add("fonts-loaded");
}); */

const Root = () => (
  <>
    <BrowserRouter>
      <SampleProvider>
        <SampleContext.Consumer>
          {({ loading, serverError }) => (loading ? <Loading /> : <App serverError={serverError} />)}
        </SampleContext.Consumer>
      </SampleProvider>
    </BrowserRouter>
  </>
);

ReactDOM.render(<Root />, document.getElementById("react_starter"));
