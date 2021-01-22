import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Menu.module.css";

const Menu = () => {
    return (
        <div className={styles.menu}>
            <NavLink exact to="/" activeClassName={styles.selected_link}>
                Главная
            </NavLink>
            <NavLink to="/recipes" activeClassName={styles.selected_link}>
                Рецепты
            </NavLink>
            <NavLink to="/users" activeClassName={styles.selected_link}>
                Пользователи
            </NavLink>
            <NavLink to="/profile" activeClassName={styles.selected_link}>
                Профиль
            </NavLink>
        </div>
    );
};

export default Menu;
