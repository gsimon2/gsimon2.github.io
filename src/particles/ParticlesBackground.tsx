import React from 'react';
import {PageWrapper} from '../util/sharedElements';
import { RootState } from '../redux/store';
import { useSelector } from 'react-redux';
import Particles from "react-tsparticles";
import { particleOptions } from './particlesOptions';

const ParticlesBackground: React.FC = ({children}) => {
    const isEnabled = useSelector((state: RootState) => state.userPreferences.liveBackground);

    return (
        <>
            {isEnabled && <Particles id="tsparticles" options={particleOptions} loaded={async () => console.log("Particles loaded")} />}
            <PageWrapper>
                {children}
            </PageWrapper>
        </>
    );
};

export default ParticlesBackground;