import { Schema } from 'jsonschema';

export const resultsSchema: Schema = {
    additionalProperties: false,
    id: '/results',
    properties: {
        description: {
            type: 'string'
        },
        sendResults: {
            type: 'boolean'
        },
        showAnswers: {
            type: 'boolean'
        },
        showRetry: {
            type: 'boolean'
        }
    },
    type: 'object'
};