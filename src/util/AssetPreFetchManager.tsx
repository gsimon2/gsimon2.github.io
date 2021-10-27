import React, {useEffect} from 'react';
import {projects} from '../siteInfo/projects';

const AssetPreFetchManager: React.FC = () => {
    useEffect(() => {
        projects.forEach(p => {
            if (p.img) {
                const img = new Image();
                img.src = p.img
            }  
        });
    }, []);

    return (
        <></>
    );
};

export default AssetPreFetchManager;