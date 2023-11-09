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
      isMockedData
   );
   if (error) {
      return <div>Oups ... il y a une erreur !</div>;
   }
   if (!isLoading) {
      const user = data.data;
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
               <Stats stats={user.keyData} isMockedData={isMockedData} />
               <Activity userId={userId} isMockedData={isMockedData} />
               <AverageSession userId={userId} isMockedData={isMockedData} />
               <Performance userId={userId} isMockedData={isMockedData} />
               <Score
                  score={user.score ? user.score : user.todayScore}
                  isMockedData={isMockedData}
               />
            </div>
         );
      } else {
         return <Navigate to="/" />;
      }
   }
}

export default Home;
