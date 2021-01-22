import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className="wrapper">
                <p className={styles.content}>
                    Coolинари © 2021. Все Права Защищены.
                </p>
            </div>
        </div>
    );
};

export default Footer;
