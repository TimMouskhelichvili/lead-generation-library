import { Schema } from 'jsonschema';
import { languages } from 'src/locale';
import { themes } from 'src/theme';

export const configurationSchema: Schema = {
    additionalProperties: false,
    id: '/configuration',
    properties: {
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
        questions: {
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