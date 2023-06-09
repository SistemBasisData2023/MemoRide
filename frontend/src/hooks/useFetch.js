import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const { user } = useContext(AuthContext); // Get the user from the AuthContext

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        console.log("Fetching data from:", url);
        const res = await fetch(url);

        if (!res.ok) {
          setError("Failed to fetch");
          console.error("Fetch request error:", res.status, res.statusText);
          alert("Failed to fetch");
          setLoading(false);
        } else {
          const result = await res.json();
          console.log("Fetched data:", result.data);
          setData(result.data);
          setLoading(false);
        }
      } catch (err) {
        setError(err.message);
        setLoading(false);
        console.error("Fetch request error:", err);
      }
    };

    fetchData();
  }, [url, user]); // Add user to the dependencies array

  return {
    data,
    error,
    loading,
  };
};

export default useFetch;
