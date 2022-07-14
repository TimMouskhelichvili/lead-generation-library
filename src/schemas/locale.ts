import { Schema } from 'jsonschema';

export const localeSchema: Schema = {
    additionalProperties: false,
    id: '/locale',
    properties: {
        start: {
            type: 'string'
        }
    },
    type: 'object'
};