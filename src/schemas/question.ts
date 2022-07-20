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
        max: {
            type: 'number'
        },
        title: {
            type: 'string'
        },
        type: {
            enum: [ 'text' ],
            type: 'string'
        }
    },
    required: [ 'title', 'answers' ],
    type: 'object'
};