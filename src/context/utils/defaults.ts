import { IContext } from 'src/context/interfaces/IContext';

/**
 * Returns the default state.
 */
export const getDefaultState = (): IContext => {
    return {
        started: false
    };
};