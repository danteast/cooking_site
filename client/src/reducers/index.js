import { combineReducers } from 'redux';
import { INCREASE_NUMBER } from '../actions/numberActions';

const numberReducer = (number = 0, action) => {
    switch (action.type) {
        case INCREASE_NUMBER: {
            return number + 1;
        }
        default: {
            return number;
        }
    }
};

export default combineReducers({
    number: numberReducer,
});
