import React from 'react'
import wind from './img/wind.gif'
import humidity from './img/humidity.gif'

const Whetherdetsil = ({img,temp,location,country,latitude,longitude,humidit,windspeed}) => {
  return (
    <>
    <div className='imgage'>
     <img src={img} alt="" />
     </div>
     <div className="detail">
     <p className='temp'>{temp}&#176; C</p>
     <p className='location'>{location}</p>
     <p className='country'>{country}</p>
     </div>
     <div className="lat">
        <div className="latitude">
            <p>latitude</p>
            <span>{latitude}</span>
        </div>
        <div className="longitude">
            <p>longitude</p>
            <span>{longitude}</span>
        </div>
     </div>
     <div className="ra">
        
     <div className="humidity">
     <img src={humidity} alt="" /><br />
     <span>{humidit}%</span>
    <p>Humidity</p>
    </div>
    <div className="windspeed">
     <img src={wind} alt="" />
     <br />
     <span>{windspeed}Km/h</span>
    <p>Windspeed</p>
    </div>
     </div>
    </>
  )
}

export default Whetherdetsil
