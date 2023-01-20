import { Schema } from 'jsonschema';

export const stylesSchema: Schema = {
    additionalProperties: false,
    id: '/styles',
    properties: {
        alignCenter: {
            type: 'boolean'
        },
        height: {
            type: 'string'
        },
        primary: {
            type: 'string'
        },
        primaryHovered: {
            type: 'string'
        }
    },
    type: 'object'
};