import React, { ReactElement } from 'react';
import { useStore } from 'src/context';

/**
 * The Main component.
 */
export const Main = (): ReactElement => {
    const title = useStore(c => c.title);
    const image = useStore(c => c.image);
    const description = useStore(c => c.description);

    return (
        <div>
            <h1>{title}</h1>
            {image && <img src={image} />}
            {description && <p>{description}</p>}
            <button>start quiz</button>
        </div>
    );
};