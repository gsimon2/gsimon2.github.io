import React, { useEffect, useState } from 'react';
import { CardMedia } from '@material-ui/core';

const LazyLoadCardMedia: React.FC<ILazyLoadCardMediaProps> = ({ className, fullResImage, lowResImage, title }) => {
    const [imageSource, setImageSource] = useState(lowResImage ?? fullResImage);
    const [isLoading, setIsLoading] = useState(lowResImage ? true : false);

    useEffect(() => {
        if (lowResImage) {
            const imageToLoad = new Image();
            imageToLoad.src = fullResImage;
            imageToLoad.onload = () => {
                console.log('now')
                setImageSource(fullResImage);
                setIsLoading(false);
            };
        }
    }, [fullResImage, lowResImage]);

    console.log(imageSource);
    console.log(isLoading)

    return (
        <CardMedia
            className={className}
            image={imageSource}
            title={title}
            style={{opacity: isLoading ? 0.5 : 1.0}}
        />
    );
};

export interface ILazyLoadCardMediaProps {
    className: string,
    fullResImage: string,
    lowResImage?: string,
    title: string
}

export default LazyLoadCardMedia;