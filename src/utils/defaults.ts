import { Validator } from 'jsonschema';
import { ValidationResultError } from 'src/errors/validationResultError';
import { IContext, Status } from 'src/context/interfaces/IContext';
import { configurationSchema } from 'src/schemas/configuration';
import { IConfiguration } from 'src/interfaces/IConfiguration';
import { getDefaultLocale, MyLocale } from 'src/locale';
import { questionSchema } from 'src/schemas/question';
import { IQuestion } from 'src/interfaces/IQuestion';
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
	
    try {
        validator.validate(config, configurationSchema, {
            allowUnknownAttributes: false,
            throwAll: true
        });
    } catch (e) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        throw new (ValidationResultError as any)(e);
    }
};

/**
 * Returns the default state.
 * @param {IConfiguration} config - The configuration.
 */
export const getDefaultState = (config: IConfiguration): IContext => {
    const questions = getQuestions(config);

    return {
        current: 0,
        description: config.description,
        image: config.image,
        locale: getLocale(config),
        question: questions[0],
        questions,
        results: {},
        status: Status.NotStarted,
        title: config.title
    };
};

/**
 * Returns the questions.
 * @param {IConfiguration} config - The configuration.
 */
const getQuestions = (config: IConfiguration): IQuestion[] => {
    let questions = [ ...config.questions ];
	
    if (config.randomize) {
        questions = questions
            .map(value => ({ sort: Math.random(), value }))
            .sort((a, b) => a.sort - b.sort)
            .map(({ value }) => value);
    }

    if (config.pick) {
        questions = questions.slice(0, config.pick);
    }

    return questions;
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