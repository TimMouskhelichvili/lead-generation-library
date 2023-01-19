import { Validator } from 'jsonschema';
import { ValidationResultError } from 'src/errors/validationResultError';
import { configurationSchema } from 'src/schemas/configuration';
import { IConfiguration } from 'src/interfaces/IConfiguration';
import { IContext } from 'src/context/interfaces/IContext';
import { getDefaultLocale, MyLocale } from 'src/locale';
import { randomizeSchema } from 'src/schemas/randomize';
import { callbacksSchema } from 'src/schemas/callbacks';
import { questionSchema } from 'src/schemas/question';
import { IQuestion } from 'src/interfaces/IQuestion';
import { resultsSchema } from 'src/schemas/results';
import { answerSchema } from 'src/schemas/answer';
import { localeSchema } from 'src/schemas/locale';
import { IAnswer } from 'src/interfaces/IAnswer';
import { shuffle } from 'src/utils/helpers';

/**
 * Validates the configuration.
 * @param {IConfiguration} config - The configuration.
 */
export const validateConfig = (config: IConfiguration): void => {
    const validator = new Validator();

    validator.addSchema(answerSchema);
    validator.addSchema(questionSchema);
    validator.addSchema(localeSchema);
    validator.addSchema(resultsSchema);
    validator.addSchema(randomizeSchema);
    validator.addSchema(callbacksSchema);

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
        callbacks: {
            onClick: config.callbacks?.onClick,
            onError: config.callbacks?.onError,
            onSend: config.callbacks?.onSend
        },
        config,
        current: 0,
        description: config.description,
        image: config.image,
        locale: getLocale(config),
        question: questions[0],
        questions,
        results: {
            description: config.results?.description,
            items: {},
            showAnswers: config.results?.showAnswers,
            showRetry: config.results?.showRetry,
            title: config.results?.title
        },
        status: 'NOT_STARTED',
        title: config.title
    };
};

/**
 * Returns the questions.
 * @param {IConfiguration} config - The configuration.
 */
const getQuestions = (config: IConfiguration): IQuestion[] => {
    let questions = [ ...config.questions ];
	
    if (config.randomize?.questions) {
        shuffle<IQuestion>(questions);
    }

    if (config.randomize?.answers) {
        questions = questions.map(question => {
            if (question.answers) {
                shuffle<IAnswer>(question.answers);
            }

            return question;
        });
    }

    if (config.pick) {
        questions = questions.slice(0, config.pick);
    }

    if (config.startQuestions) {
        questions = [ ...config.startQuestions, ...questions ];
    }

    if (config.endQuestions) {
        questions = [ ...questions, ...config.endQuestions ];
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