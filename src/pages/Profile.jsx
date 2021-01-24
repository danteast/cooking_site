import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import AddRecipeForm from '../components/Forms/AddRecipeForm';

const Profile = ({ recipes, myRecipesIds }) => {
    const myRecipes = [];
    myRecipesIds.forEach((recipeId) =>
        myRecipes.push(recipes.find((recipe) => recipe.id === recipeId))
    );
    const renderedRecipes = myRecipes.length ? (
        myRecipes.map((recipe) => (
            <div key={recipe.id}>
                <Link
                    style={{ textDecoration: 'underline', color: 'gray' }}
                    to={`/recipes/${recipe.id}`}
                >
                    {recipe.name}
                </Link>
            </div>
        ))
    ) : (
        <p>Добавьте свой первый рецепт</p>
    );

    return (
        <>
            <h1>Профиль</h1>
            <div>
                <h2>Мои рецепты</h2>
                <div>{renderedRecipes}</div>
            </div>
            <div className='add-recipe'>
                <h2>Добавить рецепт</h2>
                <AddRecipeForm id={recipes.length + 1} />
            </div>
        </>
    );
};

const mapStateToProps = (state) => ({
    recipes: state.recipes,
    myRecipesIds: state.users[0].recipesIds,
});

export default connect(mapStateToProps)(Profile);
