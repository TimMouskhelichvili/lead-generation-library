import { IContext } from 'src/context/interfaces/IContext';
import { IConfiguration } from 'src/interfaces/IConfiguration';

/**
 * Returns the default state.
 * @param {IConfiguration} config - The configuration.
 */
export const getDefaultState = (config: IConfiguration): IContext => {
    return {
        description: config.description,
        image: config.image,
        started: false,
        title: config.title
    };
};