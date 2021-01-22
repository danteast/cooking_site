import { combineReducers } from 'redux';
import { recipesListReducer } from './recipesListReducer';
import { usersReducer } from './usersReducer';

export default combineReducers({
    recipes: recipesListReducer,
    users: usersReducer,
});
