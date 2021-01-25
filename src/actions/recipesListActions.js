export const ADD_RECIPE = 'ADD_RECIPE';
export const ADD_COMMENTARY = 'ADD_COMMENTARY';
export const RENDER_RECIPES = 'RENDER_RECIPES';

export const addRecipe = (recipe) => ({
    type: ADD_RECIPE,
    payload: recipe,
});

export const renderRecipes = (count) => ({
    type: RENDER_RECIPES,
    payload: count,
});

export const addCommentary = (recipeId, text) => ({
    type: ADD_COMMENTARY,
    payload: {
        recipeId,
        text,
    },
});
