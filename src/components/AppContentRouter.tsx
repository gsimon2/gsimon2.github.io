import * as React from 'react';
import { Route, useLocation } from 'react-router-dom';
import { Routes } from '../constants/Constants';
import Home from './Home';
import Resume from './Resume';
import ProjectsPage from './projects/ProjectsPage';
import GithubStatsPage from './githubStats/GithubStatsPage';

const AppContentRouter: React.FC = () => {
   const location = useLocation();

   React.useEffect(() => {
      window.gtag("event", "page_view", {
        page_path: location.pathname + location.search + location.hash,
        page_search: location.search,
        page_hash: location.hash,
      });
    }, [location]);

    return (
        <>
            <Route  path={Routes.resume} component={Resume}/>
            <Route path={Routes.projects} component={ProjectsPage} />
            <Route path={Routes.githubStats} component={GithubStatsPage} />
            <Route  exact path={Routes.home} component={Home}/>
        </>
    );
};

export default AppContentRouter;