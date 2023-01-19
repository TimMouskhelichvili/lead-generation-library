import { useEffect } from 'react';
import { useDispatch, useStore } from 'src/context';

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
    }, [ current, results, dispatch ]);

    useEffect(() => {
        if (status === 'SUBMITTING') {
            dispatch({ type: 'BEFORE_SUBMIT' });
        }
    }, [ status, dispatch ]);
};