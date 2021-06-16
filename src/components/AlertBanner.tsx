import { makeStyles, Theme, useTheme } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import React, { useState } from 'react';

import CssConstants from '../constants/CssConstants';

const useStyles = makeStyles((theme: Theme) => ({
    alert: {
        border: `1px solid ${CssConstants.themes.shared.accentColor}`,
        boxShadow: theme.shadows[1]
    },
    wrapper: {
        maxWidth: CssConstants.appContentMaxWidth,
        margin: '1rem auto 0'
    }
}));

const AlertBanner: React.FC = () => {
    const [displayAlert, setDisplayAlert] = useState(true);
    const theme = useTheme<Theme>();
    const classes = useStyles(theme);

    return (
        <>
        { displayAlert ?
            <div className={classes.wrapper}>
                <Alert severity="info" className={classes.alert} onClose={() => setDisplayAlert(false)}>Site is under development - More to come soon! = D</Alert>
            </div> :
            null
        }
        </>
    );
};

export default AlertBanner;