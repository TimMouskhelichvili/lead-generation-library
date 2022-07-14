type ErrorObject = { errors: string[] };

/**
 * The ValidationResultError function.
 * @param {ErrorObject} this - The this.
 * @param {unknown} error - The error.
 */
function ValidationResultError (this: ErrorObject, error: unknown): void {
    this.errors = (error as ErrorObject).errors;
}

ValidationResultError.prototype = new Error();
ValidationResultError.prototype.constructor = ValidationResultError;
ValidationResultError.prototype.name = 'Validation Result Error';

export {
    ValidationResultError
};