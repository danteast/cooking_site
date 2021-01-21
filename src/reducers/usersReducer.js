import { UPDATE_USER_RECIPES_IDS } from '../actions/usersActions';

const usersList = [
    {
        id: 1,
        name: 'Admin',
        recipesIds: [],
    },
    {
        id: 2,
        name: 'Елена',
        recipesIds: ['1'],
    },
    {
        id: 3,
        name: 'Fjodor',
        recipesIds: ['2'],
    },
];

export const usersReducer = (users = usersList, action) => {
    switch (action.type) {
        case UPDATE_USER_RECIPES_IDS: {
            users[0].recipesIds.push(action.payload);

            return users;
        }
        default: {
            return users;
        }
    }
};
