import { NavLink, Link } from 'react-router-dom';
import './Header.scss';

const Header = () => {
  return(
    <header>
      <h1>Urban Stargazer</h1>
      <nav>
        <Link to='/'>
          Discover
        </Link>
        <NavLink to='saved'>
          Saved
        </NavLink>
      </nav>
    </header>
  )
}

export default Header;