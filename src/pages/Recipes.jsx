import React from 'react';
import { connect } from 'react-redux';
import RecipesList from '../components/RecipesList.jsx';
import { renderRecipes } from '../actions/recipesListActions.js';

const Recipes = ({ recipesList, renderRecipes }) => {
    let loadRecipes = (count) => {
        renderRecipes(count);
    };

    return (
        <>
            <h1>Рецепты</h1>
            <div>
                <h2>Категории</h2>
                <div></div>
            </div>
            <RecipesList recipesList={recipesList} loadRecipes={loadRecipes} />
        </>
    );
};

const mapStateToProps = (state) => ({
    recipesList: state.recipes,
});

export default connect(mapStateToProps, { renderRecipes })(Recipes);
