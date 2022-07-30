import { Schema } from 'jsonschema';
import { languages } from 'src/locale';
import { themes } from 'src/theme';

export const configurationSchema: Schema = {
    additionalProperties: false,
    id: '/configuration',
    properties: {
        answers: {
            additionalProperties: {
                items: { 
                    type: 'string'
                },
                type: 'array'
            },
            type: 'object'
        },
        customLocale: {
            $ref: '/locale'
        },
        description: {
            type: 'string'
        },
        endQuestions: {
            items: { 
                $ref: '/question'
            },
            type: 'array'
        },
        image: {
            type: 'string'
        },
        language: {
            enum: Object.keys(languages),
            type: 'string'
        },
        pick: {
            type: 'number'
        },
        questions: {
            items: { 
                $ref: '/question'
            },
            type: 'array'
        },
        randomize: {
            type: 'boolean'
        },
        sendResults: {
            type: 'boolean'
        },
        showRetry: {
            type: 'boolean'
        },
        startQuestions: {
            items: { 
                $ref: '/question'
            },
            type: 'array'
        },
        theme: {
            enum: Object.keys(themes),
            type: 'string'
        },
        title: {
            type: 'string'
        }
    },
    required: [ 'title' ],
    type: 'object'
};