import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        console.log("Fetching data from:", url);
        const res = await fetch(url);

        if (!res.ok) {
          setError('Failed to fetch');
          console.error("Fetch request error:", res.status, res.statusText);
          alert('Failed to fetch');
        } else {
          const result = await res.json();
          console.log("Fetched data:", result.data);
          setData(result.data);
        }
      } catch (err) {
        setError(err.message);
        setLoading(false);
        console.error("Fetch request error:", err);
      }
    };

    fetchData();
  }, [url]);

  return {
    data,
    error,
    loading,
  };
};

export default useFetch;
