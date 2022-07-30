import React, { ReactElement } from 'react';
import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck';
import { Navigation } from 'src/pages/questions/components/navigation';
import { Status } from 'src/context/interfaces/IContext';
import { useDispatch, useStore } from 'src/context';
import { Icon } from 'src/components/icon';
import { 
    ContainerTitle, 
    ContainerContent, 
    ContainerButtons, 
    SubmitButton, 
    SubmitContainer, 
    ContainerExplanation, 
    ContainerDescription, 
    ContainerError
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
    const question = useStore(c => c.question);
    const error = useStore(c => c.error);

    const dispatch = useDispatch();
    const button = useButton(props);
	
    const columns = question.columns || 1;

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
            <ContainerContent columns={columns}>
                {props.children}
            </ContainerContent>
            <ContainerButtons>
                <SubmitContainer>
                    {button}
                </SubmitContainer>
                <Navigation />
            </ContainerButtons>
            <ContainerError>{error}</ContainerError>
        </form>
    );
};

/**
 * The Button hook.
 * @param {IProps} props - The props.
 */
const useButton = (props: IProps): ReactElement => {
    const status = useStore(c => c.status);
    const isLastQuestion = useStore(c => c.isLastQuestion);
    const locale = useStore(c => c.locale);
    const isSubmitting = status === Status.Submitting;

    const getButtonText = (): ReactElement => {
        const text = isLastQuestion ? locale.submit : locale.ok;

        if (isSubmitting) {
            return <>{locale.submitting}</>;
        }
		
        return <>{text} <Icon icon={faCheck} /></>;
    };

    return (
        <SubmitButton disabled={props.disabled || isSubmitting} type='submit'>
            {getButtonText()}
        </SubmitButton>
    );
};