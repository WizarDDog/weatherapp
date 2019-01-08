import { UPDATE_WEATHER} from "../actions/weather-actions";


export default function weatherReducer(state = '',{type, payload}) {
    switch (type) {
        case UPDATE_WEATHER :
            return payload.weather;
        default :
            return state
    }
}