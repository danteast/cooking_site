import { ADD_RECIPE } from '../actions/recipesListActions';

const recipesList = [
    {
        id: '1',
        name: 'Шарлотка',
        author: 'Елена',
        time: 20,
        difficulty: 2,
        description:
            'Если просто, шарлотка - яблочный пирог. Хотя этот пирог и называется шарлотка, рецепт приготовления его очень напоминает яблочный бисквит. Что касается названия шарлотки, существует...',
        image: 'https://via.placeholder.com/150/aaa',
    },
    {
        id: '2',
        name: 'Бефстроганов',
        author: 'Fjodor',
        time: 100,
        difficulty: 7,
        description:
            'Для бефстроганов из говядины со сметаной подойдет практически любой выруб мяса. Если хотите избежать процесса отбивания, то надо взять мясо получше и нарезать его потоньше.',
        image: 'https://via.placeholder.com/150/aba',
    },
];

export const recipesListReducer = (recipes = recipesList, action) => {
    switch (action.type) {
        case ADD_RECIPE: {
            return [
                ...recipes,
                {
                    id: '' + (recipes.length + 1),
                    ...action.payload,
                    author: 'Admin',
                    image: 'https://via.placeholder.com/150/aba',
                },
            ];
        }
        default: {
            return recipes;
        }
    }
};
