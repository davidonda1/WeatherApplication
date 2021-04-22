import {DELETE_CITY, PUT_DATA, PUT_ERROR, PUT_LOCAL_DATA, UPDATE_WEATHER} from "../../utils/constants";

const initialState = {
    cities: []
}

export const weatherReducer = (state = initialState, action) => {
    const cities = [...state.cities]
    switch (action.type) {
        case UPDATE_WEATHER:
            cities[action.payload.index] = action.payload
            localStorage.setItem('cities', JSON.stringify(cities));
            return {...state, cities}
        case DELETE_CITY:
            cities.splice(action.payload, 1)
            localStorage.setItem('cities', JSON.stringify(cities));
            return {...state, cities}

        case PUT_LOCAL_DATA:
            cities.push(action.payload)
            return {...state, cities}
        case PUT_DATA:
            const weather = {
                city: action.payload.name,
                country: action.payload.sys.country,
                temp: action.payload.main.temp,
                pressure: action.payload.main.pressure,
                sunset: action.payload.sys.sunset,
                minTemp: action.payload.main.temp_min,
                maxTemp: action.payload.main.temp_max,
            }
            cities.push(weather)
            localStorage.setItem('cities', JSON.stringify(cities));
            return {...state, cities}
        case PUT_ERROR:
            const error = action.payload;
            return {...state, error}
        default:
            return state;
    }
}