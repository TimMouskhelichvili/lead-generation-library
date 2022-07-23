import { Schema } from 'jsonschema';

export const questionSchema: Schema = {
    additionalProperties: false,
    id: '/question',
    oneOf: [
        {
            required: [ 'answers' ]
        }, 
        {
            required: [ 'type' ]
        }
    ],
    properties: {
        answers: {
            items: { 
                $ref: '/answer'
            },
            type: 'array'
        },
        hideNavigation: {
            type: 'boolean'
        },
        max: {
            type: 'number'
        },
        min: {
            type: 'number'
        },
        placeholder: {
            type: 'string'
        },
        title: {
            type: 'string'
        },
        type: {
            enum: [ 'text' ],
            type: 'string'
        }
    },
    required: [ 'title' ],
    type: 'object'
};