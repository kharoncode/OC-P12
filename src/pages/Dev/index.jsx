import { useParams } from 'react-router-dom';

function Dev() {
   const { userId, category } = useParams();
   window.location.replace(`http://localhost:3001/user/${userId}/${category}`);
}

export default Dev;
