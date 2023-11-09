import { useParams } from 'react-router-dom';

function Dev() {
   const { id, category } = useParams();
   window.location.replace(`http://localhost:3001/user/${id}/${category}`);
}

export default Dev;
