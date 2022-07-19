import { useEffect } from 'react';
import { useDispatch, useStore } from 'src/context';

/**
 * Adds context updates.
 */
export const useContextUpdates = (): void => {
    const current = useStore(c => c.current);
    const results = useStore(c => c.results);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: 'UPDATE_QUIZ' });
    }, [ current, results ]);
};