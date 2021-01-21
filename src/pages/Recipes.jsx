import React from 'react';
import { connect } from 'react-redux';
import RecipesList from '../components/RecipesList.jsx';

const Recipes = ({ recipesList }) => {
    return (
        <>
            <h1>Страница рецептов</h1>
            <RecipesList recipesList={recipesList} />
        </>
    );
};

const mapStateToProps = (state) => ({
    recipesList: state.recipes,
});

export default connect(mapStateToProps)(Recipes);
