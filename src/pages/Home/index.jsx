import { useFetch } from '../../utils/hooks';
import { Navigate, useParams } from 'react-router-dom';
import './home.css';
import Activity from '../../components/Activity';
import AverageSession from '../../components/AverageSessions';
import Performance from '../../components/Performance';
import Score from '../../components/Score';
import Stats from '../../components/Stats';

function Home({ isMockedData }) {
   const { userId } = useParams();
   const { isLoading, data, error } = useFetch(
      `http://localhost:3001/user/${userId}`,
      `../mocks/user_main.json`,
      userId
   );
   if (error) {
      return <div>Oups ... il y a une erreur !</div>;
   }
   if (!isLoading) {
      const user = data;
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
                  <Activity userId={userId} />
               </div>
               <div className="averageSessions-grid">
                  <AverageSession userId={userId} />
               </div>
               <div className="performance-grid">
                  <Performance userId={userId} />
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
