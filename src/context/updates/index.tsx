import { useEffect } from 'react';
import { useDispatch, useStore } from 'src/context';
import { Status } from '../interfaces/IContext';

/**
 * Adds context updates.
 */
export const useContextUpdates = (): void => {
    const current = useStore(c => c.current);
    const results = useStore(c => c.results);
    const status = useStore(c => c.status);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: 'UPDATE' });
    }, [ current, results ]);

    useEffect(() => {
        if (status === Status.Submitting) {
            dispatch({ type: 'SEND' });
        }
    }, [ status ]);
};