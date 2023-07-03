import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (extension, DynamicUrl) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = DynamicUrl(extension);
        const response = await axios.get(url);
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [extension, DynamicUrl]);

  return { data };
};

export default useFetch;