import { Schema } from 'jsonschema';

export const callbacksSchema: Schema = {
    additionalProperties: false,
    id: '/callbacks',
    properties: {
        onClick: {
            type: 'function'
        },
        onError: {
            type: 'function'
        },
        onSend: {
            type: 'function'
        }
    },
    type: 'object'
};