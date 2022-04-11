import React from 'react'
import { Input ,Button, } from 'antd';
import 'antd/dist/antd.css';
import './css/searchComp.css'

function SearchComp (props) {
  // const [city, setCity] = useState("");
  const { city, setCity } = props;
  return (
    <div className='search'>
      <h1>Weather</h1>
      <Input placeholder="City Name" value={city} onChange={ (e)=> setCity(e.target.value)}/>
      <Button type="primary" onClick={()=> alert(city)}>Search</Button>
    </div>
  )
}

export default SearchComp
