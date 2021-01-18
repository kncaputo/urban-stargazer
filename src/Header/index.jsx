import { NavLink, Link } from 'react-router-dom';
import './Header.scss';

const Header = () => {
  return(
    <header>
      <Link to='/home' className='nav-link' id='page-title-link'>
        <h1>Urban Stargazer</h1>
      </Link>

      <nav>
        <Link to='/discover' className='nav-link'>
          <h2>Discover</h2>
        </Link>
        <NavLink to='/saved' className='nav-link'>
          <h2>Saved</h2>
        </NavLink>
      </nav>
    </header>
  )
}

export default Header;