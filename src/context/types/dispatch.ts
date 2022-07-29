import { QuizAction } from 'src/context/reducers/quiz';
import { CoreAction } from 'src/context/reducers/core';
import { ApiAction } from 'src/context/reducers/api';

export type DispatchParams = {
    type: CoreAction | QuizAction | ApiAction;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    value?: any;
}

export type Dispatch = (params: DispatchParams) => void;