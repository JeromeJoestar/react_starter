import React, { FC, useContext, useState, useEffect } from "react";

import { SampleContext } from "@src/contexts";
import { useFetch } from "@src/hooks";

export const Sample: FC = () => {
  const { user, login } = useContext(SampleContext);
  const [displayElement, setDisplayElement] = useState(false);
  const [url, setUrl] = useState(null);
  const data = useFetch("https://jsonplaceholder.typicode.com/posts/1", {});
  const data2 = useFetch(url, {});

  const clickFetchEvent = () => {
    setUrl("https://jsonplaceholder.typicode.com/posts/2");
  };

  useEffect(() => {
    if (user.firstName) {
      setDisplayElement(true);
    }
  }, [user]);

  return (
    <div>
      <h1>Sample Page</h1>
      <div>
        <div>
          <div>
            {displayElement && <p>{`This displays if hook state is true for ${user.firstName}`}</p>}
            {!data.isLoading && <p>{data?.response?.body}</p>}
            {!data2.isLoading && data2?.response && <p>{data2?.response?.body}</p>}
            <button onClick={login}>Back to home</button>
            <button onClick={clickFetchEvent}>Fetch New Data</button>
          </div>
        </div>
      </div>
    </div>
  );
};
