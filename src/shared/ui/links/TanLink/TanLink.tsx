import React from 'react';
import { Link as TanstackLink, LinkProps } from '@tanstack/react-router';


const TanLink: React.FC<LinkProps> = (props) => {
    return <TanstackLink { ...props }/>;
};

export default React.memo(TanLink);