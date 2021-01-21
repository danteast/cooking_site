import React from 'react';
import { footer, content } from './Footer.module.css';

const Footer = () => {
    return (
        <div className={footer}>
            <div className='wrapper'>
                <p className={content}>Coolинари © 2021. Все Права Защищены.</p>
            </div>
        </div>
    );
};

export default Footer;
