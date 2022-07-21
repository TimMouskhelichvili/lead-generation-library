import { Schema } from 'jsonschema';

export const localeSchema: Schema = {
    additionalProperties: false,
    id: '/locale',
    properties: {
        ok: {
            type: 'string'
        },
        selectMultipleAnswers: {
            type: 'string'
        },
    	selectOneAnswer: {
            type: 'string'
        },
        start: {
            type: 'string'
        },
        submit: {
            type: 'string'
        }
    },
    type: 'object'
};