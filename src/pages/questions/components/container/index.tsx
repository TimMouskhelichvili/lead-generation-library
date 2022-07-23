import React, { ReactElement } from 'react';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { Navigation } from 'src/pages/questions/components/navigation';
import { useDispatch, useStore } from 'src/context';
import { Icon } from 'src/components/icon';
import { 
    ContainerTitle, 
    ContainerContent, 
    ContainerButtons, 
    SubmitButton, 
    SubmitContainer, 
    ContainerExplanation, 
    ContainerDescription 
} from './style';

interface IProps {
	title: string;
	selected: string[];
	disabled: boolean;
	explanation?: string;
	children: React.ReactNode;
}

/**
 * The Container component.
 * @param {IProps} props - The props.
 */
export const Container = (props: IProps): ReactElement => {
    const isLastQuestion = useStore(c => c.isLastQuestion);
    const question = useStore(c => c.question);
    const locale = useStore(c => c.locale);

    const dispatch = useDispatch();
	
    const text = isLastQuestion ? locale.submit : locale.ok;

    const handleSubmit = (e: React.FormEvent): void => {
        e.preventDefault();
        dispatch({ type: 'SUBMIT', value: props.selected });
    };

    return (
        <form onSubmit={handleSubmit}>
            <ContainerTitle>{props.title}</ContainerTitle>
            {question.description && 
				<ContainerDescription dangerouslySetInnerHTML={{ __html: question.description }} />}
            {props.explanation && 
				<ContainerExplanation>{props.explanation}</ContainerExplanation>}
            <ContainerContent>
                {props.children}
            </ContainerContent>
            <ContainerButtons>
                <SubmitContainer>
                    <SubmitButton disabled={props.disabled} type='submit'>
                        {text} <Icon icon={faCheck} />
                    </SubmitButton>
                </SubmitContainer>
                <Navigation />
            </ContainerButtons>
        </form>
    );
};