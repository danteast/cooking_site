import React from 'react';
import { Link } from 'react-router-dom';
import RecipeItem from '../components/RecipeItem.jsx';

const RecipesList = (props) => {
    let { recipesList } = props;

    let renderRecipesList = () => {
        if (typeof recipesList !== 'undefined') {
            if (recipesList.length !== 0) {
                return recipesList.map((item) => {
                    return (
                        <Link key={item.id} to={`/recipes/${item.id}`}>
                            <RecipeItem
                                name={item.name}
                                author={item.author}
                                time={item.time}
                                difficulty={item.difficulty}
                                rating={item.rating}
                                description={item.description}
                                image={item.image}
                            />
                        </Link>
                    );
                });
            }
        } else {
            return <div>{'No recipes :-('}</div>;
        }
    };

    return <div className='recipies-list-container'>{renderRecipesList()}</div>;
};

export default RecipesList;
