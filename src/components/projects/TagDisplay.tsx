import React from 'react';
import styled from 'styled-components';

const IconWrapper = styled.div`
    padding: 0.25rem;
    display: flex;

    a {
        margin-left: 0.5rem;
        color: #3f51b5 !important;
    }
`;

const TagDisplay: React.FC<ITagDisplayProps> = ({text, icon, link, isCompactView}) => {

    return (
        <IconWrapper title={isCompactView ? text: link}>
            {icon}
            {!isCompactView && <a href={link} target="_blank" rel="noreferrer">{text}</a>}
        </IconWrapper>
    );
};

export interface ITagDisplayProps {
    text: string;
    icon: any;
    link: string;
    isCompactView: boolean;
}

export default TagDisplay;