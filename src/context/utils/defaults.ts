import { IContext } from 'src/context/interfaces/IContext';
import { IConfiguration } from 'src/interfaces/IConfiguration';
import { getDefaultLocale, MyLocale } from 'src/locales/index';

/**
 * Returns the default state.
 * @param {IConfiguration} config - The configuration.
 */
export const getDefaultState = (config: IConfiguration): IContext => {
    return {
        description: config.description,
        image: config.image,
        locale: getLocale(config),
        started: false,
        title: config.title
    };
};

/**
 * Returns the locale.
 * @param {IConfiguration} config - The configuration.
 */
const getLocale = (config: IConfiguration): MyLocale => {
    const defaultLocale = getDefaultLocale(config.language);

    if (!config.customLocale) {
        return defaultLocale;
    }

    return {
        ...defaultLocale,
        ...config.customLocale
    };
};