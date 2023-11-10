import { useState, useEffect } from 'react';

export function useFetch(urlApi, urlMock, userId) {
   const [data, setData] = useState({});
   const [isLoading, setLoading] = useState(true);
   const [error, setError] = useState(null);
   const isMocked = true;
   let url = '';
   const id = Number.parseInt(userId);

   if (isMocked) {
      url = urlMock;
   } else {
      url = urlApi;
   }

   useEffect(() => {
      if (!url) {
         return;
      }
      setLoading(true);
      async function fetchData() {
         try {
            const response = await fetch(url);
            const data = await response.json();
            setData(
               isMocked
                  ? data.find((el) => (el.id || el.userId) === id)
                  : data.data
            );
         } catch (err) {
            console.log('==== error ====', err);
            setError(true);
         } finally {
            setLoading(false);
         }
      }
      fetchData();
   }, [url, isMocked, id]);

   return { isLoading, data, error };
}
