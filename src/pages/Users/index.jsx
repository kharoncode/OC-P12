import './users.css';

import { Link } from 'react-router-dom';

function Users({ userId, setUserId }) {
   return (
      <div className="us-container">
         <div>Selectionnez un utilisateur</div>
         <div className="us-container-link-container">
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
         <div className="mockData-container">
            <div>Mocked data ?</div>
            <div className="mockData-inputs-container">
               <input type="radio" />
               <input type="radio" />
            </div>
         </div>
      </div>
   );
}

export default Users;
