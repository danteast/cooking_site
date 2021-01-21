import React from 'react';
import Menu from '../components/Menu';
import RecipesList from '../components/RecipesList.jsx'

const Recipes = (props) => {

    let recipesList=[
        {
            name: 'Шарлотка',
            author: 'Елена',
            time: 20,
            difficuilty: 2,
            text: 'Если просто, шарлотка - яблочный пирог. Хотя этот пирог и называется шарлотка, рецепт приготовления его очень напоминает яблочный бисквит. Что касается названия шарлотки, существует...',
            image: 'https://via.placeholder.com/150/aaa'
        },
        {
            name: 'Бефстроганов',
            author: 'Fjodor',
            time: 100,
            difficuilty: 7,
            text: 'Для бефстроганов из говядины со сметаной подойдет практически любой выруб мяса. Если хотите избежать процесса отбивания, то надо взять мясо получше и нарезать его потоньше.',
            image: 'https://via.placeholder.com/150/aba'
        },
    ]

    return (
        <div className='container'>
            <h1>Страница рецептов</h1>
            <Menu />
            <RecipesList recipesList={ recipesList } />
        </div>
    );
};

export default Recipes;
