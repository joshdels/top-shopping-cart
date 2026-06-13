import { useState, useEffect } from "react";

export function useFashionData(category) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const retrieveData = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(
          `https://fakestoreapi.com/products/category/${category}`,
        );
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    retrieveData();
  }, [category]);

  return { data, loading, error };
}
