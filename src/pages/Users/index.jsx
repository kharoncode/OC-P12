import { Link } from 'react-router-dom';

function Users({ userId, setUserId }) {
   return (
      <div>
         <div>Selectionnez un utilisateur</div>
         <div>
            <Link
               to="/12/"
               key="12"
               onClick={() => {
                  setUserId(12);
               }}
            >
               12
            </Link>
            <Link
               to="/18/"
               key="18"
               onClick={() => {
                  setUserId(18);
               }}
            >
               18
            </Link>
         </div>
      </div>
   );
}

export default Users;
