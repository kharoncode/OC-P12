import { Link } from 'react-router-dom';
import styles from './nav.module.css';
import yoga from '../../assets/nav/yoga.svg';
import swim from '../../assets/nav/swim.svg';
import bike from '../../assets/nav/bike.svg';
import fitness from '../../assets/nav/fitness.svg';

function Nav({ userId }) {
   return (
      <nav className={styles.container}>
         <div className={styles.menu}>
            <Link to={`/${userId}/`}>
               <img src={yoga} alt="Yoga" />
            </Link>
            <Link to={`/${userId}/`}>
               <img src={swim} alt="Natation" />
            </Link>
            <Link to={`/${userId}/`}>
               <img src={bike} alt="Vélo" />
            </Link>
            <Link to={`/${userId}/`}>
               <img src={fitness} alt="Fitness" />
            </Link>
         </div>
         <span className={styles.copyright}>Copyright, SportSee 2020</span>
      </nav>
   );
}

export default Nav;
