export const QuestionTypeArray = [ 'text' ] as const;

export type QuestionType = typeof QuestionTypeArray[number];

export const ValidateTypeArray = [ 'email' ] as const;

export type ValidateType = typeof ValidateTypeArray[number];

export const StatusArray = [ 'NOT_STARTED', 'ACTIVE', 'COMPLETED', 'SUBMITTING', 'VIEWING_ANSWERS' ] as const;

export type Status = typeof StatusArray[number];