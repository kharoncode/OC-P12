import { useFetch } from '../../utils/hooks';
import { useParams } from 'react-router-dom';
import './home.css';

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
      return <div className="home">Bonjour {user.userInfos.firstName} !</div>;
   }
}

export default Home;
