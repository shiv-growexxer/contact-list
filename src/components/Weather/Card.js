import React from 'react'
import Cardthird from './Cardthird';
import './css/card.css'
// import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'

function Card (props) {
  const weather = props.data;
  var date = new Date();
  var day = date.getDate().toString();
  var mon = date.getMonth().toString();
  var yr = date.getFullYear().toString();
  var sec = weather.sunset;
  var date1 = new Date(sec * 1000);
  var timestr = `${date1.getHours()}:${date1.getMinutes()}`;
  
  return (
      <div className='card'>
          <div className='card-inner'>
        <div className='first'>
          <i class="fa fa-cloud fa-5x"></i>
        </div>          
        <div className='second'>
          <div className='left'>
            {/* <h1>{weather.temp} </h1>
            {props.city ? weather.name : "Navsari"}, {weather.country}</div> */}
            <p className='temp'>{weather.temp}&deg;</p>
            <p className='location'>{props.city ? weather.name : "Navsari"}, {weather.country}</p>
          </div>
          <div className='right'>{day}/{mon}/{yr}
            <br />
            sunset : {timestr}
          </div>
        </div>
        
        <div className='third'>
          {/* <p>Feels Like : 28{weather.feels_like}</p>
          <p>Maximum : 28{weather.temp_max}</p>
          <p>Minimum : 28{weather.temp_min}</p>
           */}
          <Cardthird name="Feels Like" value={28} change={false}>
          <p>Feels Like : {weather.feels_like}&deg;</p>
          <p>Maximum : {weather.temp_max}&deg;</p>
          <p>Minimum : {weather.temp_min}&deg;</p>
          </Cardthird>
          <Cardthird name="Maximum" value={28} change={true}>
            <p>humidity : { weather.humidity}</p>
            <p>speed : { weather.speed}</p>
            <p>pressure : { weather.pressure}</p>
          </Cardthird>
        </div>
        
      </div>
    </div>
  )
}

export default Card
