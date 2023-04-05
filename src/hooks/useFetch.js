import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const res = await fetch(url);

        const json = await res.json();

        setData(json);
      } catch (error) {
        console.log("Houve alguma erro ao carregar os dados!")
      }

      setLoading(false);
    };

    fetchData();
  }, [url]);

  return { data, loading };
};

export default useFetch;
