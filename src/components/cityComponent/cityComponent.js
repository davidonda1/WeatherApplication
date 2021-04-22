import React, {useState} from 'react';
import {RiCelsiusFill} from "react-icons/all";
import {bindActionCreators} from "redux";
import {delete_city, getWeather, updateWeather} from "../../redux/actions/weatherActions";
import {connect} from "react-redux";
import './css_module/cityComponent.css'

const CityComponent = ({weather, delete_city, index, updateWeather}) => {

    const [isPressed, setIsPressed] = useState(false);

    const renderNorm = () => {
        return (

            <div className='container shadow badge-info col-4 '>
                <p >Location:{weather.city},{weather.country}</p>
                <p>Temperature:{weather.temp} <RiCelsiusFill/></p>
                <button className='btn_city mr-1' onClick={() => updateWeather(weather.city, index)}>Update Weather</button>
                <button className='btn_city' onClick={() => delete_city(index)}>Delete City</button>
                <button className='btn_city ml-1' onClick={() => setIsPressed(true)}>More info...</button>

            </div>

        );
    }
    const renderFullWeatherInfo = () => {
        return (
            <div className='container badge-info col-4'>
                <p>Weather Information {weather.city.toUpperCase()}</p>
                <p>Country:{weather.country}</p>
                <p>Pressure:{weather.pressure}</p>
                <p>Sunset:{new Date(weather.sunset * 1000).toTimeString()}</p>
                <div>
                    <p>Temperature min:{weather.minTemp} <RiCelsiusFill/></p>
                    <p>Temperature now:{weather.temp} <RiCelsiusFill/></p>
                    <p>Temperature max:{weather.maxTemp} <RiCelsiusFill/></p>
                </div>
                <button className='btn_city mr-1' onClick={() => updateWeather(weather.city, index)}>Update Weather</button>
                <button className='btn_city' onClick={() => delete_city(index)}>Delete City</button>
                <button className='btn_city ml-1' onClick={() => setIsPressed(false)}>Less info...</button>

            </div>
        );
    }

    return (

        isPressed ? renderFullWeatherInfo() : renderNorm()
    );
};
const mapDispatchToProps = dispatch => {
    return bindActionCreators({getWeather, delete_city, updateWeather}, dispatch);
}


export default connect(null, mapDispatchToProps)(CityComponent);