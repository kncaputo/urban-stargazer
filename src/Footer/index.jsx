import nasaLogo from '../assets/NASA_Worm_logo.png';
import './Footer.scss'

const Footer = () => {
  return (
    <footer id='footer'>
      <p>Photos brought to you by NASA's Astronomy Picture of the Day archive</p>
      <img id='logo' src={nasaLogo} alt='NASA logo' />
    </footer>
  )
}

export default Footer;