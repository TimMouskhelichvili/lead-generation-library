import { IConfiguration } from 'src/interfaces/IConfiguration';
import { IContext } from 'src/context/interfaces/IContext';
import { getDefaultLocale, MyLocale } from 'src/locale';
import { Validator } from 'jsonschema';
import { configurationSchema } from 'src/schemas/configuration';
import { answerSchema } from 'src/schemas/answer';
import { questionSchema } from 'src/schemas/question';
/**
 * Returns the default state.
 * @param {IConfiguration} config - The configuration.
 */
export const getDefaultState = (config: IConfiguration): IContext => {
    const v = new Validator();
    v.addSchema(answerSchema);
    v.addSchema(questionSchema);

    const s = v.validate(config, configurationSchema, {
        allowUnknownAttributes: false
    });

    console.log(s);
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