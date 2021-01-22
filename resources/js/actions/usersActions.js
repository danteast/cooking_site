export const UPDATE_USER_RECIPES_IDS = 'UPDATE_USER_RECIPES_IDS';

export const updateUserRecipesIds = (id) => ({
    type: UPDATE_USER_RECIPES_IDS,
    payload: id,
});
