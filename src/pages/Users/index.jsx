import './users.css';
import { Link } from 'react-router-dom';

/**
 * User selection interface
 * @param { Function } setUserId
 * @param { Function } setIsMocked
 */

function Users({ setUserId, setIsMocked }) {
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
         <div
            className="mockData-inputs-container"
            onChange={(e) =>
               setIsMocked(e.target.value === 'true' ? true : false)
            }
         >
            <legend>Mocked data ?</legend>
            <div>
               <input type="radio" id="yes" name="mockedData" value={true} />
               Oui
            </div>

            <div>
               <input type="radio" id="no" name="mockedData" value={false} />
               Non
            </div>
         </div>
      </div>
   );
}

export default Users;
