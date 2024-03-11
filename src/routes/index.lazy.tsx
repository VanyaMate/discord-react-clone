import React from 'react';
import { createLazyFileRoute } from '@tanstack/react-router';


export type IndexLazyProps = {};

const IndexLazy: React.FC<IndexLazyProps> = (props) => {
    const {} = props;

    return (
        <div>
            IndexLazyComponent
        </div>
    );
};

export const Route = createLazyFileRoute('/')({
    component: IndexLazy,
});

export default React.memo(IndexLazy);