import logo from '../../assets/logo.svg';
import './header.css';
import { Link } from 'react-router-dom';

function Header({ userId }) {
   return (
      <header>
         <Link to={`/`} className="logo">
            <img src={logo} alt="Logo de SportSee" />
            <span>SportSee</span>
         </Link>
         <Link to={`/${userId}/`} className="link">
            Accueil
         </Link>
         <Link to={`/${userId}/profil`} className="link">
            Profil
         </Link>
         <Link to={`/${userId}/settings`} className="link">
            Réglages
         </Link>
         <Link to={`/${userId}/community`} className="link">
            Communauté
         </Link>
      </header>
   );
}

export default Header;
