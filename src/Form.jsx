import { useState } from "react";
import axios from 'axios';

const Form = ({data, setData}) => {
    const [cityName, setCityName] = useState('');

    const getData = (city) =>{
        let KEY = 'f4833cf990dc92ef43563c9b00da2a78';
        let APILink = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY}`;
        axios(APILink)
        .then(({data}) =>{
          console.log(data);
          setData(data)
        });
      }
    return (
        <div id="Minos">
            <input placeholder="Name of the city" id="inp" type="text" onChange={(event) =>{
        setCityName(event.target.value)
      }}/>
    <button id="btn" onClick={() => {
      getData(cityName)
    }}>Get weather</button>
        </div>
    );
}

export default Form;
