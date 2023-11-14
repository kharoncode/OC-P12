import { Navigate, useParams } from 'react-router-dom';
import './home.css';
import Activity from '../../components/Activity';
import AverageSession from '../../components/AverageSessions';
import Performance from '../../components/Performance';
import Score from '../../components/Score';
import Stats from '../../components/Stats';
import formatData from '../../utils/service/format';
import { useFetch } from '../../utils/service/call';

/**
 * Display the Dashboard
 * @param { Boolean } isMocked used by useFetch to know which data to load
 *
 * @param { Number } userID from useParams
 * @param { Boolean } isLoading from the Hook useFetch : informs you when the api call has ended
 * @param { Object.<Object> } data from the Hook useFetch : all the user data
 * @param { Boolean } error from the Hook useFetch : informs you when there is an error
 */

function Home({ isMocked }) {
   const { userId } = useParams();
   const { isLoading, data, error } = useFetch(userId, isMocked);

   if (error) {
      return <div>Oups ... il y a une erreur !</div>;
   }
   if (!isLoading) {
      const user = formatData(data.mainData, 'main');
      const activity = formatData(data.activityData.sessions, 'activity');
      const averageSessions = formatData(
         data.averageSessionsData.sessions,
         'averageSessions'
      );
      const performance = formatData(data.performanceData.data, 'performance');
      if (user !== undefined) {
         return (
            <div className="dashboard">
               <div className="title">
                  <div className="hello">
                     Bonjour <span>{user.userInfos.firstName}</span>
                  </div>
                  <div className="congratulations">
                     Félicitations ! Vous avez explosé vos objectifs hier 👏
                  </div>
               </div>
               <div className="stats-grid">
                  <Stats stats={user.keyData} />
               </div>
               <div className="activity-grid">
                  <Activity data={activity} />
               </div>
               <div className="averageSessions-grid">
                  <AverageSession data={averageSessions} />
               </div>
               <div className="performance-grid">
                  <Performance data={performance} />
               </div>
               <div className="score-grid">
                  <Score score={user.score} />
               </div>
            </div>
         );
      } else {
         return <Navigate to="/" />;
      }
   }
}

export default Home;
