import React from 'react';
import RootRouter from '../pages/RootRouter';
import Footer from './Footer';
import Header from './Header';

const App = () => {
    return (
        <>
            <main>
                <div className='wrapper'>
                    <Header />
                    <RootRouter />
                </div>
            </main>
            <Footer />
        </>
    );
};

export default App;
