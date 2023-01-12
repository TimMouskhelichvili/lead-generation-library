import { Schema } from 'jsonschema';

export const randomizeSchema: Schema = {
    additionalProperties: false,
    id: '/randomize',
    properties: {
        answers: {
            type: 'boolean'
        },
        questions: {
            type: 'boolean'
        }
    },
    type: 'object'
};