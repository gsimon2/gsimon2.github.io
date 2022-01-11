import React, { useEffect, useState } from 'react';
import { makeStyles, CardMedia, CardMediaProps } from '@material-ui/core';
import {getRandomIntFromRange} from '../../util/RandomNumber';

const useStyles = (hueStart: number, hueEnd: number, animationDelay: number) => makeStyles(() => ({
    "@keyframes hueRotation": {
        "0%": {
            filter: `hue-rotate(${hueStart}deg)`
        },
        "100%": {
          filter: `hue-rotate(${hueEnd}deg)`
        }
    },
    animatedPlaceHolder: {
        background: 'linear-gradient(14deg, #3f51b5, #5bb2fd)',
        height: '100%',
        width: '100%',
        animation: '$hueRotation 2000ms infinite alternate',
        animationDelay: `${animationDelay}ms`
    }
}));

const CardMediaWithPlaceHolder: React.FC<ICardMediaWithPlaceHolderProps> = ({ className, image, title }) => {
    const [isLoading, setIsLoading] = useState(true);
    const hueStart = getRandomIntFromRange(-20,20);
    const hueEnd = getRandomIntFromRange(80,120);
    const animationDelay = getRandomIntFromRange(0, 2000);
    const classes = useStyles(hueStart, hueEnd, animationDelay)();

    useEffect(() => {
        const imageToLoad = new Image();
        imageToLoad.src = image;
        imageToLoad.onload = () => {
            setIsLoading(false);
        };
    }, [image]);

    const cardMediaProps: CardMediaProps = {
        className,
        title,
    }

    if (isLoading) {
        cardMediaProps.children = <div className={classes.animatedPlaceHolder}></div>;
    } else {
        cardMediaProps.image = image;
    }

    return (
        <CardMedia {...cardMediaProps} />
    );
};

export interface ICardMediaWithPlaceHolderProps {
    className: string,
    image: string,
    title: string
}

export default CardMediaWithPlaceHolder;