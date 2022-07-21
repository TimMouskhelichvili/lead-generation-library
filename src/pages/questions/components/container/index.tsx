import React, { ReactElement } from 'react';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { Navigation } from 'src/pages/questions/components/navigation';
import { useDispatch, useStore } from 'src/context';
import { Icon } from 'src/components/icon';
import { ContainerTitle, ContainerContent, ContainerButtons, SubmitButton, SubmitContainer, ContainerExplanation } from './style';

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
    const locale = useStore(c => c.locale);
    const isLastQuestion = useStore(c => c.isLastQuestion);
    const dispatch = useDispatch();
	
    const text = isLastQuestion ? locale.submit : locale.ok;

    const handleSubmit = (): void => {
        dispatch({ type: 'SUBMIT', value: props.selected });
    };

    return (
        <div>
            <ContainerTitle>{props.title}</ContainerTitle>
            {props.explanation && 
				<ContainerExplanation>{props.explanation}</ContainerExplanation>}
            <ContainerContent>
                {props.children}
            </ContainerContent>
            <ContainerButtons>
                <SubmitContainer>
                    <SubmitButton disabled={props.disabled} onClick={handleSubmit}>
                        {text} <Icon icon={faCheck} />
                    </SubmitButton>
                </SubmitContainer>
                <Navigation />
            </ContainerButtons>
        </div>
    );
};