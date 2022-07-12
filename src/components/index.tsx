import React, { ReactElement, useEffect } from 'react';
import { useDispatch, useStore } from 'src/context';

export const Front = (): ReactElement => {
    const dispatch = useDispatch();
    const started = useStore(c => c.started);

    useEffect(() => {
        dispatch({ type: 'INIT' });
    }, []);
	
    return (
        <div>quiz {String(started)}</div>
    );
};