import React from 'react';
import { connect } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

const Recipe = ({ recipes }) => {
    console.log('recipes: ', recipes);
    const { id } = useParams();
    const { name, author, difficulty, image, description, time } = recipes.find(
        (recipe) => recipe.id === id
    );

    return (
        <>
            <h1>{name}</h1>
            <img src={image} alt={name} />
            <p>Описание: {description}</p>
            <p>
                Автор:{' '}
                <Link className='author-link' to='/users'>
                    {author}
                </Link>
            </p>
            <p>Сложность рецепта: {difficulty} / 10</p>
            <p>Время приготовления: {time} минут</p>
        </>
    );
};

const mapStateToProps = (state) => ({ recipes: state.recipes });

export default connect(mapStateToProps)(Recipe);
