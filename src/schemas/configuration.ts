import { Schema } from 'jsonschema';
import { languages } from 'src/locale';
import { themes } from 'src/theme';

export const configurationSchema: Schema = {
    additionalProperties: false,
    id: '/configuration',
    properties: {
        customLocale: {
            $ref: '/locale'
        },
        description: {
            type: 'string'
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