import { useEffect, useState } from 'react';
import apirequest from '../Utils/ApiRequest.js';

const useGetData = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await apirequest.get(url);
        setData(res.data);
      } catch (err) {
        setError(err);
      }
    };

    fetchData();
  }, [url]);

  return { data, error };
};

export default useGetData;
