import {
    api_key,
    base_url,
    DELETE_CITY,
    PUT_DATA,
    PUT_ERROR,
    PUT_LOCAL_DATA,
    UPDATE_WEATHER
} from "../../utils/constants";

export const put_data = (data) => {
    return {
        type: PUT_DATA,
        payload: data
    }
}
export const update_weather = (city, index) => {
    return {
        type: UPDATE_WEATHER,
        payload: {...city, ...index}
    }
}
export const put_local_data = (data) => {
    return {
        type: PUT_LOCAL_DATA,
        payload: data
    }
}
export const delete_city = (index) => {
    return {
        type: DELETE_CITY,
        payload: index
    }
}

export const put_error = (error) => {
    return {
        type: PUT_ERROR,
        payload: error
    }
}

export const getWeather = (city) => {
    return dispatch => {
        dispatch(put_error(null));
        fetch(`${base_url}?q=${city}&appid=${api_key}&units=metric`)
            .then(response => response.json())
            .then(data => {
                dispatch(put_data(data))

            })
            .catch(e => {
                dispatch(put_error('Enter correct city name'));
            })
    }
}

export const updateWeather = (city, index) => {
    return dispatch => {
        dispatch(put_error(null));
        fetch(`${base_url}?q=${city}&appid=${api_key}&units=metric`)
            .then(response => response.json())
            .then(data => {
                const weather = {
                    city: data.name,
                    country: data.sys.country,
                    temp: data.main.temp,
                    minTemp: data.main.temp_min,
                    maxTemp: data.main.temp_max,
                    pressure: data.main.pressure,
                    sunset: data.sys.sunset
                }
                dispatch(update_weather(weather, index))
            })
            .catch(e => {
                dispatch(put_error('Enter correct city name'));
            })
    }
}



