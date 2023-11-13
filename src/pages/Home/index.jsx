import { Navigate, useParams } from 'react-router-dom';
import './home.css';
import Activity from '../../components/Activity';
import AverageSession from '../../components/AverageSessions';
import Performance from '../../components/Performance';
import Score from '../../components/Score';
import Stats from '../../components/Stats';
import { useMultiFetch } from '../../utils/service/call';

function Home() {
   const { userId } = useParams();

   const { isLoading, data, error } = useMultiFetch(userId);

   if (error) {
      return <div>Oups ... il y a une erreur !</div>;
   }
   if (!isLoading) {
      const user = data.mainData;
      const activity = data.activityData;
      const averageSessions = data.averageSessionsData;
      const performance = data.performanceData;
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
                  <Score score={user.score ? user.score : user.todayScore} />
               </div>
            </div>
         );
      } else {
         return <Navigate to="/" />;
      }
   }
}

export default Home;
