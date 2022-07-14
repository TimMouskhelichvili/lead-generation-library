import { Schema } from 'jsonschema';

export const questionSchema: Schema = {
    additionalProperties: false,
    id: '/question',
    properties: {
        answers: {
            items: { 
                $ref: '/answer'
            },
            type: 'array'
        },
        title: {
            type: 'string'
        }
    },
    required: [ 'title', 'answers' ],
    type: 'object'
};