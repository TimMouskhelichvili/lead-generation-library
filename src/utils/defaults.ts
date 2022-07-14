import { Validator } from 'jsonschema';
import { configurationSchema } from 'src/schemas/configuration';
import { IConfiguration } from 'src/interfaces/IConfiguration';
import { IContext } from 'src/context/interfaces/IContext';
import { getDefaultLocale, MyLocale } from 'src/locale';
import { questionSchema } from 'src/schemas/question';
import { answerSchema } from 'src/schemas/answer';
import { localeSchema } from 'src/schemas/locale';

/**
 * Validates the configuration.
 * @param {IConfiguration} config - The configuration.
 */
export const validateConfig = (config: IConfiguration): void => {
    const validator = new Validator();

    validator.addSchema(answerSchema);
    validator.addSchema(questionSchema);
    validator.addSchema(localeSchema);
	
    validator.validate(config, configurationSchema, {
        allowUnknownAttributes: false,
        throwAll: true
    });
};

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