import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Error404 from './Error404';
import Main from './Main';
import Recipe from './Recipe';
import Recipes from './Recipes';

const RootRouter = () => {
    return (
        <>
            <Switch>
                <Route exact path='/' render={() => <Main />} />
                <Route path='/recipes' render={() => <Recipes />} />
                <Route path='/recipe' render={() => <Recipe />} />
                <Route render={() => <Error404 />} />
            </Switch>
        </>
    );
};

export default RootRouter;
