import { Schema } from 'jsonschema';
import { enLocale } from 'src/locale/languages/en';

type Properties = { 
	[key: string]: Schema;
};

/**
 * Returns all the locales.
 */
const getProperties = (): Properties => {
    const properties: Properties = {};

    Object.keys(enLocale).forEach(key => {
        properties[key] = {
            type: 'string'
        };
    });

    return properties;
};

export const localeSchema: Schema = {
    additionalProperties: false,
    id: '/locale',
    properties: getProperties(),
    type: 'object'
};