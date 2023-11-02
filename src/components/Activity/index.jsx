import './activity.css';
import { useFetch } from '../../utils/hooks';

function Activity({ userId }) {
   const { isLoading, data, error } = useFetch(
      `http://localhost:3001/user/${userId}/activity`
   );
   if (error) {
      return <div>Oups ... il y a une erreure !</div>;
   }
   if (!isLoading) {
      const activity = data.data.sessions;
      return <div className="activity-container">Activity {userId}</div>;
   }
}

export default Activity;
