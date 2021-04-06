import freeflyer from './freeflyer.jpeg';
import './Error.scss';

const Error = () => {
  return(
    <main id='error-main' style={{backgroundImage: `url(${freeflyer})`}}>
      <p>Sorry, we've encountered an error. Please go back.</p>
    </main>
  )
}

export default Error;