import React from 'react';
import { connect } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

const Recipe = ({ recipes, users }) => {
    console.log('recipes: ', recipes);
    const { id } = useParams();
    const {
        name,
        author,
        difficulty,
        image,
        description,
        time,
        rating,
        commentaries,
    } = recipes.find((recipe) => recipe.id === id);

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
            <p>Рейтинг: {rating}</p>
            <div
                style={{
                    border: '1px solid black',
                    padding: '5px',
                    borderRadius: '5px',
                }}
            >
                <h2 style={{ marginBottom: '10px' }}>Комментарии:</h2>
                {commentaries.map((commentary) => (
                    <div
                        style={{
                            backgroundColor: 'lightgray',
                            padding: '5px',
                            borderRadius: '5px',
                            marginBottom: '5px',
                        }}
                        key={commentary.id}
                    >
                        <p>
                            Автор:{' '}
                            {
                                users.find(
                                    (user) => user.id === commentary.authorId
                                ).name
                            }
                        </p>
                        <p>{commentary.text}</p>
                    </div>
                ))}
            </div>
        </>
    );
};

const mapStateToProps = (state) => ({
    recipes: state.recipes,
    users: state.users,
});

export default connect(mapStateToProps)(Recipe);
