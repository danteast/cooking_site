import React from 'react';
import RootRouter from '../pages/RootRouter';
import Footer from './Footer';
import Header from './Header';


const App = () => {
    return (
        <>
            <Header />
            <main>
                <div className='wrapper'>
                    <RootRouter />
                </div>
            </main>
            <Footer />
        </>
    );
};

export default App;
