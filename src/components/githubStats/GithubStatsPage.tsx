import { Grow, makeStyles, Theme, useMediaQuery, useTheme } from '@material-ui/core';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { ThemeTypes } from '../../constants/Constants';
import CssConstants from '../../constants/CssConstants';
import {PageWrapper} from '../../util/sharedElements';

const useStyles = makeStyles((theme: Theme) => ({
    gridContainerColumns: {
        display: 'grid',
        gridTemplateColumns: 'minmax(5rem, 1fr) 1fr'
    },
    gridContainerRows: {
        display: 'grid',
        gridTemplateRows: 'minmax(5rem, 1fr) 1fr'
    },
    link: {
        color: CssConstants.linkColor
    },
    p: {
        fontSize: 'small',
        textAlign: 'center'
    },
    imgDesktop: {
        display: 'flex',
        flex: '1 1 auto',
        "& img": {
            objectFit: 'contain',
            justifySelf: 'center',
            minWidth: 0,
            maxWidth: '30rem',
            maxHeight: '100%'
        }
    },
    imgMobile: {
        maxWidth: '100%',
        maxHeight: '35rem'
    }
}));

const GithubStatsPage: React.FC = () => {
    const theme = useTheme<Theme>();
    const classes = useStyles(theme);
    const isMobileView = useMediaQuery('(max-width:650px)');
    const githubReadmeStatsTheme = theme.palette.type === ThemeTypes.dark ? 'tokyonight' : 'light';
    const githubOverviewStats = `[![Glen Simon's GitHub stats](https://github-readme-stats.vercel.app/api?username=gsimon2&count_private=true&show_icons=true&theme=${githubReadmeStatsTheme})](https://github.com/gsimon2)`;
    const githubLanguageStats = `[![Top Langs](https://github-readme-stats.vercel.app/api/top-langs/?username=gsimon2&layout=compact&langs_count=8&exclude_repo=[population-mapping-via-wifi,EvoRos-Enki,EvoRos-Paper,Resume,autorally_platform_instructions,ros_catkin_ws_src,ROS_Gazebo_ErleRover_Guide,ros_catkin_ws_old,ErleRover-Scripts&theme=tokyonight])](https://github.com/gsimon2)`;

    return (
        <PageWrapper>
            <div className={isMobileView ? classes.gridContainerRows : classes.gridContainerColumns}>
                <Grow in={true}>
                    <div>
                        <ReactMarkdown className={classes.imgDesktop}>{githubOverviewStats}</ReactMarkdown>
                    </div>
                </Grow>
                <Grow in={true}>
                    <div>
                        <ReactMarkdown>{githubLanguageStats}</ReactMarkdown>
                    </div>
                </Grow>
            </div>
            <p className={classes.p}>Github stat elements were generated using: <a className={classes.link} href="https://github.com/anuraghazra/github-readme-stats" target="_blank" rel="noreferrer">Github Readme Stats</a></p>
        </PageWrapper>
    );
};

export default GithubStatsPage;