import React from 'react';


export type TitleProps = {};

const Title: React.FC<TitleProps> = (props) => {
    const {} = props;

    return (
        <div>
            TitleComponent
        </div>
    );
};

export default React.memo(Title);