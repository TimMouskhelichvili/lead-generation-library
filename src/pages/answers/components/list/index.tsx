import React, { ReactElement } from 'react';
import { getFilteredQuestions, getQuestionsAnswers } from 'src/utils/questions';
import { Answer } from 'src/pages/answers/components/answer';
import { useStore } from 'src/context';

/**
 * The AnswersList component.
 */
export const AnswersList = (): ReactElement | null => {
    const questions = useStore(c => c.questions);
    const { items } = useStore(c => c.results);
    const answers = getQuestionsAnswers(questions);

    if (!answers) {
        return null;
    }

    const list: ReactElement[] = [];
    
    getFilteredQuestions(questions).forEach((question, index) => {
        list.push(
            <Answer
                index={index}
                key={question.id} 
                question={question} 
                answers={answers[question.id]} 
                results={items[question.id]} />
        );
    });

    return <>{list}</>;
};