import './averageSessions.css';
import { useFetch } from '../../utils/hooks';

function AverageSessions({ userId }) {
   const { isLoading, data, error } = useFetch(
      `http://localhost:3001/user/${userId}/average-sessions`
   );
   if (error) {
      return <div>Oups ... il y a une erreure !</div>;
   }
   if (!isLoading) {
      const averageSessions = data.data.sessions;
      return (
         <div className="averageSessions-container">
            AverageSession {userId}
         </div>
      );
   }
}

export default AverageSessions;
