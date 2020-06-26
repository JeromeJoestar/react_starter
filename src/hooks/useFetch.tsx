import { useState, useEffect } from "react";

export const useFetch = (url: string, options: any) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  useEffect(() => {
    setResponse(null);
    setError(null);
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(url, options);
        const json = await res.json();
        setResponse(json);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    if (url) {
      fetchData();
    }
  }, [url]);
  return { response, error, isLoading };
};
