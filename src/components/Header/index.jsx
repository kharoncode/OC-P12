import logo from '../../assets/logo.svg';
import styles from './header.module.css';
import { Link } from 'react-router-dom';

/**
 * Header
 * @component
 * @param { Number } userId
 */

function Header({ userId }) {
   return (
      <header className={styles.container}>
         <Link to={`/`} className={styles.logo}>
            <img src={logo} alt="Logo de SportSee" />
            <span className={styles.title}>SportSee</span>
         </Link>
         <Link to={`/${userId}/`} className={styles.link}>
            Accueil
         </Link>
         <Link to={`/${userId}/`} className={styles.link}>
            Profil
         </Link>
         <Link to={`/${userId}/`} className={styles.link}>
            Réglages
         </Link>
         <Link to={`/${userId}/`} className={styles.link}>
            Communauté
         </Link>
      </header>
   );
}

export default Header;
