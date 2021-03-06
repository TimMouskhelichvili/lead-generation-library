import { Schema } from 'jsonschema';

export const answerSchema: Schema = {
    additionalProperties: false,
    id: '/answer',
    properties: {
        answer: {
            type: 'string'
        },
        description: {
            type: 'string'
        },
        id: {
            type: 'string'
        },
        image: {
            type: 'string'
        }
    },
    required: [ 'answer', 'id' ],
    type: 'object'
};