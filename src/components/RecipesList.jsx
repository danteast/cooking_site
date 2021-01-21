import React from 'react'

import RecipeItem from '../components/RecipeItem.jsx'
import { Link } from 'react-router-dom'

const RecipesList = (props) => {

    let { recipesList } = props;

    let renderRecipesList = () => {
        if (typeof(recipesList) !== 'undefined' ) {
            if (recipesList.length !== 0) {
                return recipesList.map((item, i) => {
                    return(
                        <Link to="/recipe">
                            <RecipeItem name={ item.name } author={ item.author } time={ item.time } difficuilty={ item.difficuilty } text={ item.text } image={ item.image } key={ i } />
                        </Link>
                    )
                })
            }
        } else {
            return (<div>{'No recipes :-('}</div>)
        }
    }

    return (
        <div className='recipies-list-container'>
            {renderRecipesList()}
        </div>
    );
};

export default RecipesList;