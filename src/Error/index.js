import freeflyer from './freeflyer.jpeg';
import './Error.scss';


const Error = () => {
  return(
    <main id='error-main' style={{backgroundImage: `url(${freeflyer})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
      <p id='error-text'>Houston, we've got a problem. Please go back.</p>
    </main>
  )
}

export default Error;