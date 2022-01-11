import React, { useEffect, useState } from 'react';
import {PageWrapper} from '../util/sharedElements';
import { RootState } from '../redux/store';
import { useSelector } from 'react-redux';
import Particles from "react-tsparticles";
import { particleOptions } from './particlesOptions';
import { makeStyles } from '@material-ui/core';

let rendered = false;

const useStyles = makeStyles(() => ({
    particles: {
        transition: 'opacity 4s'
    },
    hidden: {
        opacity: 0
    },
    shown: {
        opacity: 1
    }
}));

const ParticlesBackground: React.FC = ({children}) => {
    const isEnabled = useSelector((state: RootState) => state.userPreferences.liveBackground);
    const classes = useStyles();
    const [displayStateClass, setDisplayStateClass] = useState(rendered ? classes.shown : classes.hidden);

    useEffect(() => {
        !rendered && setTimeout(() => {
            setDisplayStateClass(classes.shown);
            rendered = true;
        }, 1000);
    }, [classes.shown]);

    return (
        <>
            {isEnabled && <Particles id="tsparticles" className={`${classes.particles} ${displayStateClass}`} options={particleOptions} />}
            <PageWrapper>
                {children}
            </PageWrapper>
        </>
    );
};

export default ParticlesBackground;