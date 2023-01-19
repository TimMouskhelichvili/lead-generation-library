import { ApiAction } from 'src/context/reducers/callbacks';
import { CoreAction } from 'src/context/reducers/core';
import { QuizAction } from 'src/context/reducers/quiz';

export type EventType = CoreAction | QuizAction | ApiAction;