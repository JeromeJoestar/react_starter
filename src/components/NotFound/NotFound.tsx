import React, { FC } from "react";
import { Helmet } from "react-helmet-async";

export const NotFound: FC = () => (
  <>
    <Helmet>
      <title>Page Not Found</title>
      <meta name="render:status_code" content="404" />
    </Helmet>
    <div>
      <div>
        <h1>404</h1>
        <h1>Page Not Found</h1>
        <div>
          <a href="/">Back to Home</a>
        </div>
      </div>
    </div>
  </>
);
