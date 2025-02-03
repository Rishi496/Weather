import React, { useState } from 'react'
import Whetherdetsil from './Whetherdetsil'
import searc from './img/search.gif'
import clearsky from './img/clear sky.gif'
import fewclouds from './img/few clouds.gif'
import scatteredclouds from './img/scattered clouds.gif'
import brokenclouds from './img/broken clouds.gif'
import showerrain from './img/shower rain.gif'
import rain from './img/rain.gif'
import thunderstorm from './img/thunderstorm.gif'
import snow from './img/snow.gif'
import mist from './img/mist.png'
import night from './img/night.gif'
import cloudnight from './img/cloudnight.gif'
import mistnight from './img/mistnight.gif'


const App = () => {
  const [text,setText]=useState("")
  const [img,setImg]=useState(scatteredclouds)
  const [temp,setTemp]=useState(0)
  const [location,setLocation]=useState("")
  const [country,setCountry]=useState("")
  const [latitude,setLatitude]=useState(0)
  const [longitude,setlongitude]=useState(0)
  const [humidit,setHumidit]=useState(0)
  const [windspeed,setWindspeed]=useState(0)
  const [citynotFound,setCitynotFound]=useState(false)
  const [loading,setLoading]=useState(false)
  const weatherIconmap={
"01d":clearsky,
"01n":night,
"02d":fewclouds,
"03d":scatteredclouds,
"04d":brokenclouds,
"04n":cloudnight,
"09d":showerrain,
"10d":rain,
"11d":thunderstorm,
"13d":snow,
"50d":mist,
"50n":mistnight
  }
  const search = async()=>{
    const url= `https://api.openweathermap.org/data/2.5/weather?q=${text}&appid=5d9aa9cdc1930d5fe11ce99a957df36b&units=Metric`
    try{
      let res=await fetch(url);
      let data=await res.json();
      if(data === "404"){
        console.log("city not found")
        setCitynotFound(true)
        setLoading(false)
        return;
      }
      const weatherIconcode=data.weather[0].icon
      setImg(weatherIconmap[weatherIconcode] || scatteredclouds)
      setLocation(data.name)
      setCountry(data.sys.country)
      setHumidit(data.main.humidity)
      setTemp(data.main.temp)
      setWindspeed(data.wind.speed)
      setLatitude(data.coord.lat)
      setlongitude(data.coord.lon)
    }catch(error){
      console.error("An error occerred:",error.message);
    }finally{
      setLoading(false);
    }
  }
  const handleCity=(e)=>{
setText(e.target.value)
  }
  return (
  <div className="main">
    <div className="con">
      <input type="text"
      placeholder='search city'
      value={text} 
      onChange={handleCity}
      />
      <div className="searching">
        <img src={searc} alt="" onClick={search}/>
      </div>
    </div>
    <Whetherdetsil img={img}temp={temp}location={location}country=
    {country}latitude={latitude}longitude={longitude}humidit={humidit}windspeed={windspeed}/>
  </div>
  )
}

export default App
