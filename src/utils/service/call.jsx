import { useState, useEffect } from 'react';

/**
 * Get data with fetch
 * @param { String } url
 * @return { Object }
 */

async function fetchData(url) {
   const response = await fetch(url);
   const data = await response.json();
   return await data;
}

/**
 * Selects the Mocked data according to the user
 * @param { Array.<Object> } data
 * @param { number } userId
 * @return { Array.<Object> }
 */
function selectUserMockedData(data, userId) {
   return data.find((el) => (el.id || el.userId) === Number.parseInt(userId));
}

/**
 * Use Fetch to get all the data
 * @param { Number } userId
 * @param { Boolean } isMocked
 * @return { Boolean } isLoading
 * @return { Object.<Array | Object> } data
 * @return { Boolean } error
 */

export function useFetch(userId, isMocked) {
   const [data, setData] = useState({});
   const [isLoading, setLoading] = useState(true);
   const [error, setError] = useState(null);

   useEffect(() => {
      const urlMock = {
         main: `../mocks/user_main.json`,
         activity: `../mocks/user_activity.json`,
         averageSessions: `../mocks/user_averageSessions.json`,
         performance: `../mocks/user_performance.json`,
      };
      const urlApi = {
         main: `http://localhost:3000/user/${userId}`,
         activity: `http://localhost:3000/user/${userId}/activity`,
         averageSessions: `http://localhost:3000/user/${userId}/average-sessions`,
         performance: `http://localhost:3000/user/${userId}/performance`,
      };
      const url = isMocked ? urlMock : urlApi;

      setLoading(true);
      async function fetchDatas() {
         try {
            const getMainData = await fetchData(url.main);
            const getActivityData = await fetchData(url.activity);
            const getAverageSessionsData = await fetchData(url.averageSessions);
            const getPerformanceData = await fetchData(url.performance);

            setData({
               mainData: isMocked
                  ? selectUserMockedData(getMainData, userId)
                  : getMainData.data,
               activityData: isMocked
                  ? selectUserMockedData(getActivityData, userId)
                  : getActivityData.data,
               averageSessionsData: isMocked
                  ? selectUserMockedData(getAverageSessionsData, userId)
                  : getAverageSessionsData.data,
               performanceData: isMocked
                  ? selectUserMockedData(getPerformanceData, userId)
                  : getPerformanceData.data,
            });
         } catch (err) {
            console.log('==== error ====', err);
            setError(true);
         } finally {
            setLoading(false);
         }
      }
      fetchDatas();
   }, [isMocked, userId]);

   return { isLoading, data, error };
}
