import React, { use, useEffect, useState } from "react";

const UseFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ignore = false;

    async function fetchData() {
      setLoading(true);
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Something went wrong");
        const result = await response.json();
        if (!ignore) setData(result);
      } catch (error) {
        if (!ignore) setError(error);
      } finally {
        if (!ignore) setLoading(false);
      }
    }
    fetchData();
    return () => {
      ignore = true;
    };
  }, [url]);

  return { data, loading, error };
};

export default UseFetch;
