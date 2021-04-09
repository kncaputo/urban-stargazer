import { NavLink, Link } from 'react-router-dom';
import { generateRandomDate } from '../utilities/utilities';
import './Header.scss';

const Header = () => {
  return(
    <header id='page-header'>
      <Link 
        to='/home' 
        className='nav-link' 
        id='page-title-link'
      >
        <h1 id='page-title'>Urban Stargazer</h1>
      </Link>

      <nav>
        <NavLink 
          to={`/discover`}
          className='nav-link' 
          activeClassName='nav-active'
        >
          <h2>Discover</h2>
        </NavLink>
        <NavLink 
          to='/saved' 
          className='nav-link' 
          activeClassName='nav-active'
        >
          <h2>Saved</h2>
        </NavLink>
      </nav>
    </header>
  )
}

export default Header;