import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <div>
            <Link to='/'>Главная</Link>
            <Link to='/recipes'>Рецепты</Link>
            <Link to='/recipe'>Рецепт</Link>
        </div>
    );
};

export default Menu;
