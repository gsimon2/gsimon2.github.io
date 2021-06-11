import { Alert } from '@material-ui/lab';
import React, { useState } from 'react';
import styled from 'styled-components';
import CssConstants from '../constants/CssConstants';

const AlertWrapper = styled.div`
    max-width: ${CssConstants.appContentMaxWidth};
    margin: 1rem auto 0;
`;

const AlertBanner: React.FC = () => {
    const [displayAlert, setDisplayAlert] = useState(true);

    return (
        <>
        { displayAlert ?
            <AlertWrapper>
                <Alert severity="info" onClose={() => setDisplayAlert(false)}>Site is under development - More to come soon! = D</Alert>
            </AlertWrapper> :
            null
        }
        </>
    );
};

export default AlertBanner;