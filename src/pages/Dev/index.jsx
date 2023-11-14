import { useParams } from 'react-router-dom';

/**
 * Redirects to json data
 */

function Dev() {
   const { userId, category } = useParams();
   window.location.replace(
      `http://localhost:3000/user/${userId}/${
         category === undefined ? '' : category
      }`
   );
}

export default Dev;
