import { UPDATE_USER_RECIPES_IDS } from '../actions/usersActions';

const usersList = [
    {
        id: 1,
        name: 'Admin',
        recipesIds: [],
        authorRating: 0,
    },
    {
        id: 2,
        name: 'Елена',
        recipesIds: ['1'],
        authorRating: 16,
    },
    {
        id: 3,
        name: 'Fjodor',
        recipesIds: ['2'],
        authorRating: 9,
    },
    {
        id: 4,
        name: 'Александр',
        recipesIds: [],
        authorRating: 0,
    },
    {
        id: 5,
        name: 'Роберт',
        recipesIds: [],
        authorRating: 0,
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
