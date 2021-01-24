import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import HomeIcon from '@material-ui/icons/Home';
import RecipeIcon from './Icons/RecipeIcon';
import { menu, selected_link } from './Menu.module.css';

const LinkDiv = styled.div`
    display: flex;
    align-items: center;
`;

const Heading = styled.p`
    color: green;
`;

const Menu = () => {
    return (
        <div className={menu}>
            <NavLink exact to='/' activeClassName={selected_link}>
                <LinkDiv>
                    <HomeIcon color='primary' />
                    <Heading>Главная</Heading>
                </LinkDiv>
            </NavLink>
            <NavLink to='/recipes' activeClassName={selected_link}>
                <LinkDiv>
                    <RecipeIcon color='primary' />
                    <Heading>Рецепты</Heading>
                </LinkDiv>
            </NavLink>
            <NavLink to='/authors' activeClassName={selected_link}>
                <LinkDiv>
                    <RecipeIcon color='primary' />
                    <Heading>Рейтинг авторов</Heading>
                </LinkDiv>
            </NavLink>
            <NavLink to='/profile' activeClassName={selected_link}>
                <LinkDiv>
                    <RecipeIcon color='primary' />
                    <Heading>Профиль</Heading>
                </LinkDiv>
            </NavLink>
        </div>
    );
};

export default Menu;
