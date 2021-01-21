import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addRecipe } from '../actions/recipesListActions';
import { updateUserRecipesIds } from '../actions/usersActions';
import { add_recipe_form, form_item, form_input } from './Profile.module.css';

const Profile = ({
    recipes,
    myRecipesIds,
    addRecipe,
    updateUserRecipesIds,
}) => {
    const [name, setName] = useState('');
    const [time, setTime] = useState('0');
    const [difficulty, setDifficulty] = useState('1');
    const [description, setDescription] = useState('');

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
        <p>Добавьте свой первый рецепт рецепт</p>
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
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        const id = '' + (recipes.length + 1);
                        const newRecipe = {
                            id,
                            name,
                            time,
                            difficulty,
                            description,
                        };

                        addRecipe(newRecipe);
                        updateUserRecipesIds(id);
                    }}
                    className={add_recipe_form}
                >
                    <div className={form_item}>
                        <label htmlFor='name'>Название</label>
                        <input
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className={form_input}
                            name='name'
                            type='text'
                            id='name'
                        />
                    </div>
                    <div className={form_item}>
                        <label htmlFor='time'>Время приготовления</label>
                        <input
                            value={time}
                            onChange={(e) => setTime(e.target.value)}
                            className={form_input}
                            name='time'
                            type='text'
                            id='time'
                        />
                    </div>
                    <div className={form_item}>
                        <label htmlFor='difficulty'>
                            Сложность приготовления
                        </label>
                        <select
                            value={difficulty}
                            onChange={(e) => setDifficulty(e.target.value)}
                            id='difficulty'
                        >
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                            <option value='4'>4</option>
                            <option value='5'>5</option>
                            <option value='6'>6</option>
                            <option value='7'>7</option>
                            <option value='8'>8</option>
                            <option value='9'>9</option>
                            <option value='10'>10</option>
                        </select>
                    </div>
                    <div className={form_item}>
                        <label htmlFor='description'>Описание рецепта</label>
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className={form_input}
                            name='description'
                            id='description'
                        />
                    </div>
                    <div className={form_item}>
                        <button>Добавить рецепт</button>
                    </div>
                </form>
            </div>
        </>
    );
};

const mapStateToProps = (state) => ({
    recipes: state.recipes,
    myRecipesIds: state.users[0].recipesIds,
});

const mapDispatchToProps = {
    addRecipe,
    updateUserRecipesIds,
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
