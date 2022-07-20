import { Schema } from 'jsonschema';

export const questionSchema: Schema = {
    id: '/question',
    oneOf: [
        {
            additionalProperties: false,
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
                }
            },
            required: [ 'title', 'answers' ],
            type: 'object'
        },
        {
            additionalProperties: false,
            properties: {
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
            required: [ 'title', 'type' ],
            type: 'object'
        }
    ]
};