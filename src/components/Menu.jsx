import React from 'react';
import { NavLink } from 'react-router-dom';
import { menu, selected_link } from './Menu.module.css';

const Menu = () => {
    return (
        <div className={menu}>
            <NavLink exact to='/' activeClassName={selected_link}>
                Главная
            </NavLink>
            <NavLink to='/recipes' activeClassName={selected_link}>
                Рецепты
            </NavLink>
            <NavLink to='/users' activeClassName={selected_link}>
                Пользователи
            </NavLink>
            <NavLink to='/profile' activeClassName={selected_link}>
                Профиль
            </NavLink>
        </div>
    );
};

export default Menu;
