import { useFetch } from '../../utils/hooks';
import { useParams } from 'react-router-dom';
import './home.css';
import Activity from '../../components/Activity';
import AverageSession from '../../components/AverageSessions';
import Performance from '../../components/Performance';
import Score from '../../components/Score';
import Stats from '../../components/Stats';

function Home() {
   const { userId } = useParams();
   const { isLoading, data, error } = useFetch(
      `http://localhost:3001/user/${userId}`
   );
   if (error) {
      return <div>Oups ... il y a une erreure !</div>;
   }
   if (!isLoading) {
      const user = data.data;
      return (
         <div className="dashboard">
            <div className="title">
               <div className="hello">
                  Bonjour <span>{user.userInfos.firstName}</span>
               </div>
               <div className="congratulations">
                  Félicitation ! Vous avez explosé vos objectifs hier 👏
               </div>
            </div>
            <Stats />
            <Activity />
            <AverageSession />
            <Performance />
            <Score />
         </div>
      );
   }
}

export default Home;
