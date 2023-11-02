import './performance.css';
import { useFetch } from '../../utils/hooks';

function Performance({ userId }) {
   const { isLoading, data, error } = useFetch(
      `http://localhost:3001/user/${userId}/performance`
   );
   if (error) {
      return <div>Oups ... il y a une erreure !</div>;
   }
   if (!isLoading) {
      const performance = data.data;
      return <div className="performance-container">Performance</div>;
   }
}

export default Performance;
