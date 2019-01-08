export const UPDATE_WEATHER = 'weather:updateWeather'

export function updateWeather(newWeather) {
    return {
        type: UPDATE_WEATHER,
        payload: {
            weather: newWeather
        }
    }
}