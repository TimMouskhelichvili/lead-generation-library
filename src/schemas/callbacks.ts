import { Schema } from 'jsonschema';

export const callbacksSchema: Schema = {
    additionalProperties: false,
    id: '/callbacks',
    properties: {
        onError: {
            type: 'function'
        },
        onEvent: {
            type: 'function'
        },
        onSend: {
            type: 'function'
        }
    },
    type: 'object'
};