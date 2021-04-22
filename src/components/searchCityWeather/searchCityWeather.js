import React, {useState} from 'react';
import {bindActionCreators} from "redux";
import {getWeather} from "../../redux/actions/weatherActions";
import {connect} from "react-redux";
import './css_module/searchCityWeather.css'
const SearchCityWeather = ({getWeather, error}) => {

    const [city, setCity] = useState('');

    const handleChange = event => {
        setCity(event.target.value)
    }

    const handleClick = () => {
        getWeather(city.trim())
        setCity('')
    }
    const renderOk = () => {
        return (
            <div className='container'>
                <div className='offset-4 '>
                <input className='input '
                    value={city}
                    onChange={handleChange}
                    type='text'
                    name='city'
                    placeholder='City'/>
                <button className='btn ml-1' onClick={handleClick}>Get weather</button>
                </div>
            </div>
        );
    }
    const renderError = () => {
        return (
            <>
                {renderOk()}
                <div>
                    <p>{error}</p>
                </div>
            </>
        );
    }
    return (
        error ? renderError() : renderOk()
    );
};
const mapDispatchToProps = dispatch => {
    return bindActionCreators({getWeather}, dispatch);
}
const mapStateToProps = state => {
    return {
        error: state.weatherReducer.error
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchCityWeather);