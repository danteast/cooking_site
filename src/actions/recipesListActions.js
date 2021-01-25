export const ADD_RECIPE = 'ADD_RECIPE';
export const RENDER_RECIPES = 'RENDER_RECIPES';

export const addRecipe = (recipe) => ({
    type: ADD_RECIPE,
    payload: recipe,
});

export const renderRecipes = (count) => ({
    type: RENDER_RECIPES,
    payload: count,
})