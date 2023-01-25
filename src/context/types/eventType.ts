import { PublicAction } from 'src/context/reducers/public';
import { ApiAction } from 'src/context/reducers/callbacks';
import { CoreAction } from 'src/context/reducers/core';
import { QuizAction } from 'src/context/reducers/quiz';

export type InternalEvent = CoreAction | QuizAction | ApiAction;

export type PublicEvent = PublicAction;

export type EventType = InternalEvent | 'QUIZ_RESULTS_SEND';