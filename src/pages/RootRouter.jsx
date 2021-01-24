import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Error404 from './Error404';
import Main from './Main';
import Profile from './Profile';
import Recipe from './Recipe';
import Recipes from './Recipes';
import Authors from './Authors';

const RootRouter = () => {
    return (
        <>
            <Switch>
                <Route exact path='/' render={() => <Main />} />
                <Route exact path='/recipes' render={() => <Recipes />} />
                <Route path='/recipes/:id' render={() => <Recipe />} />
                <Route path='/authors' render={() => <Authors />} />
                <Route path='/profile' render={() => <Profile />} />
                <Route render={() => <Error404 />} />
            </Switch>
        </>
    );
};

export default RootRouter;
