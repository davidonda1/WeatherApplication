import './App.css';
import SearchCityWeather from "./components/searchCityWeather/searchCityWeather";
import CityComponent from "./components/cityComponent/cityComponent";
import {connect} from "react-redux";
import {useEffect} from "react";
import {bindActionCreators} from "redux";
import {put_local_data} from "./redux/actions/weatherActions";

function App({cities, put_local_data}) {
    useEffect(() => {
        if (localStorage.getItem('cities')) {
            const citiesFromStorage = JSON.parse(localStorage.getItem('cities'));
            citiesFromStorage.forEach(item => put_local_data(item))
        }
    }, [])

    const cards = () => {
        if (cities) {
            return (
                cities.map((item, index) => {
                    return (
                        <CityComponent key={index} index={index} weather={item}/>
                    );
                })
            );
        } else {
            return (
                <></>
            );
        }
    }
    return (
        <div className='wrapper'>
            <SearchCityWeather/>
            {cards()}
        </div>
    );
}

const mapStateToProps = state => {
    return {
        cities: state.weatherReducer.cities
    }
}
const mapDispatchToProps = dispatch => {
    return bindActionCreators({put_local_data}, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
