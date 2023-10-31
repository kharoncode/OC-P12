//import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './nav.css';
import yoga from '../../assets/yoga.svg';
import swim from '../../assets/swim.svg';
import bike from '../../assets/bike.svg';
import fitness from '../../assets/fitness.svg';

function Nav(userId) {
   //const { userId } = useParams();
   return (
      <nav>
         <div className="menu">
            <Link to={`/${userId}/`} className="link">
               <img src={yoga} alt="Yoga" />
            </Link>
            <Link to={`/${userId}/`} className="link">
               <img src={swim} alt="Natation" />
            </Link>
            <Link to={`/${userId}/`} className="link">
               <img src={bike} alt="Vélo" />
            </Link>
            <Link to={`/${userId}/`} className="link">
               <img src={fitness} alt="Fitness" />
            </Link>
         </div>
         <span className="copiryght">Copiryght, SportSee 2020</span>
      </nav>
   );
}

export default Nav;
