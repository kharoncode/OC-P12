import { useState, useEffect } from 'react';

export function useFetch(url, isMockedData) {
   const [data, setData] = useState({});
   const [isLoading, setLoading] = useState(true);
   const [error, setError] = useState(null);
   console.log(isMockedData);

   useEffect(() => {
      if (!url) {
         return;
      }
      setLoading(true);
      async function fetchData() {
         try {
            const response = await fetch(url);
            const data = await response.json();
            setData(data);
         } catch (err) {
            console.log('==== error ====', err);
            setError(true);
         } finally {
            setLoading(false);
         }
      }
      fetchData();
   }, [url]);
   return { isLoading, data, error };
}
