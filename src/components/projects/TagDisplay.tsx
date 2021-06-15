import React from 'react';
import styled from 'styled-components';

const IconWrapper = styled.div`
    padding: 0.25rem;
    display: flex;

    a {
        margin-left: 0.5rem;
        color: #3f51b5 !important;
    }

    span {
        margin-left: 0.5rem;
    }
`;

const TagDisplay: React.FC<ITagDisplayProps> = ({text, icon, link, isCompactView}) => {
    const title = link ? isCompactView ? text: link : text;
    const expandedElement = link ? <a href={link} target="_blank" rel="noreferrer">{text}</a> : <span>{text}</span>;

    return (
        <IconWrapper title={title}>
            {icon}
            {!isCompactView && expandedElement}
        </IconWrapper>
    );
};

export interface ITagDisplayProps {
    text: string;
    icon: any;
    link?: string;
    isCompactView: boolean;
}

export default TagDisplay;