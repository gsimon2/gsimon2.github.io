import * as React from 'react';
import { Route } from 'react-router-dom';
import { Routes } from '../constants/Constants';
import Home from './Home';
import Resume from './Resume';

const AppContentRouter: React.FC = () => {

    return (
        <>
            <Route  path={Routes.resume} component={Resume}/>
            <Route  exact path={Routes.home} component={Home}/>
        </>
    );
};

export default AppContentRouter;