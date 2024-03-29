import { Schema } from 'jsonschema';
import { QuestionTypeArray, ValidateTypeArray } from 'src/types/enums';

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
        before: {
            type: 'string'
        },
        columns: {
            type: 'number'
        },
        correctAnswers: {
            items: { 
                type: 'string'
            },
            type: 'array'
        },
        description: {
            type: 'string'
        },
        hideFromResults: {
            type: 'boolean'
        },
        hideNavigation: {
            type: 'boolean'
        },
        id: {
            type: 'string'
        },
        isVisible: {
            type: 'function'
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
            enum: QuestionTypeArray as unknown as string[],
            type: 'string'
        },
        validate: {
            enum: ValidateTypeArray as unknown as string[],
            type: 'string'
        }
    },
    required: [ 'title', 'id' ],
    type: 'object'
};