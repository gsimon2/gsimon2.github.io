import * as React from 'react';
import { Route } from 'react-router-dom';
import { Routes } from '../constants/Constants';
import Home from './Home';
import Resume from './Resume';
import ProjectsPage from './projects/ProjectsPage';
import AlertBanner from './AlertBanner';
import GithubStatesPage from './githubStats/GithubStatsPage';

const AppContentRouter: React.FC = () => {

    return (
        <>
            <AlertBanner />
            <Route  path={Routes.resume} component={Resume}/>
            <Route path={Routes.projects} component={ProjectsPage} />
            <Route path={Routes.githubStates} component={GithubStatesPage} />
            <Route  exact path={Routes.home} component={Home}/>
        </>
    );
};

export default AppContentRouter;