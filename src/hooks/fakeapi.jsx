import { useState, useEffect } from "react";

export function fetchData() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      const retrieveData = async () => {
        setLoading(true);
        setError(null);

        // Url here
      };
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  });

  return { data, loading, error };
}
