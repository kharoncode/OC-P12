import logo from '../../assets/logo.svg';
import './header.css';
import { Link } from 'react-router-dom';

function Header() {
   return (
      <header>
         <Link to="/" className="logo">
            <img src={logo} alt="Logo de SportSee" />
            <span>SportSee</span>
         </Link>
         <Link to="/" className="link">
            Accueil
         </Link>
         <Link to="/" className="link">
            Profil
         </Link>
         <Link to="/" className="link">
            Réglage
         </Link>
         <Link to="/" className="link">
            Communauté
         </Link>
      </header>
   );
}

export default Header;
