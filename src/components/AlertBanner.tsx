import { Theme, useTheme } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import { Alert } from '@mui/material';
import React, { useState } from 'react';

import CssConstants from '../constants/CssConstants';

const useStyles = makeStyles((theme: Theme) => ({
    alert: {
        border: `1px solid ${CssConstants.themes.shared.accentColor}`,
        boxShadow: theme.shadows[1]
    },
    wrapper: {
        maxWidth: CssConstants.appContentMaxWidth,
        width: 'fit-content',
        margin: 'auto'
    },
    popoutContainer: {
        position: 'absolute',
        zIndex: theme.zIndex.snackbar,
        width: '100%',
        marginTop: '2.5rem'
    }
}));

const AlertBanner: React.FC = () => {
    const [displayAlert, setDisplayAlert] = useState(true);
    const theme = useTheme<Theme>();
    const classes = useStyles(theme);

    return (
        <>
        { displayAlert ?
            <div className={classes.popoutContainer}>
                <div className={classes.wrapper}>
                    <Alert severity="info" className={classes.alert} onClose={() => setDisplayAlert(false)}>Site is under development - More to come soon! = D</Alert>
                </div> 
            </div> :
            null
        }
        </>
    );
};

export default AlertBanner;