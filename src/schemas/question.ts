import { Schema } from 'jsonschema';
import { QuestionType, ValidateType } from 'src/interfaces/IQuestion';

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
        description: {
            type: 'string'
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
            enum: Object.keys(QuestionType),
            type: 'string'
        },
        validate: {
            enum: Object.keys(ValidateType),
            type: 'string'
        }
    },
    required: [ 'title' ],
    type: 'object'
};