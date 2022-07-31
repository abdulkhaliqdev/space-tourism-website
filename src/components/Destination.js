import React from 'react'
import { Link } from 'react-router-dom';

// import image
import DestinationImage from '../assets/destination/image-europa.png';

const Destination = () => {
  const destinationList = ['Moon','Mars','Europa','Titan']
  return (
    <div className='destination'>
      <div className='destination-tagline'>
        <p>
          <span>01</span> Pick your destination
        </p>
        <img alt='destinatin-image' className='destination-image' src={DestinationImage} />
      </div>
      <div className='destination-link'>
        <div className='destination-nav-link'>
          {destinationList.map((item, i) => <Link key={i} to={item}><span className='font-weight-800 destiantion-index-menu'>0{i+1}</span> <span className='font-weight-100' id='destination-navbar-link'>{item}</span></Link>)}
        </div>

        <div className='destination-text-container'>
          <h2 className='destination-title'>
            Europa
          </h2>
          <p className='destinatin-paragraph'>
            The smallest of the four Galilean moons orbiting Jupiter, Europa is a 
            winter lover’s dream. With an icy surface, it’s perfect for a bit of 
            ice skating, curling, hockey, or simple relaxation in your snug 
            wintery cabin.
          </p>
          <hr className='destination-dev-line' />
          <div className='destination-time-distance-container'>
            <div className='destination-distance-container' >
              <h5 className='destination-distance-h5'>
                Avg. distance
              </h5>
              <h3 className='destination-distance-h3'>
                628 mil. km
              </h3>
            </div>
            <div className='destination-time-container' >
              <h5 className='destination-time-h5'>
                Est. travel time
              </h5>
              <h3 className='destination-time-h3'>
                3 years
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Destination