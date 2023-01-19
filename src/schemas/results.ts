import { Schema } from 'jsonschema';

export const resultsSchema: Schema = {
    additionalProperties: false,
    id: '/results',
    properties: {
        description: {
            type: [ 'string', 'function' ]
        },
        showAnswers: {
            type: 'boolean'
        },
        showRetry: {
            type: 'boolean'
        },
        title: {
            type: [ 'string', 'function' ]
        }
    },
    type: 'object'
};