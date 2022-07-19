import React, { ReactElement } from 'react';
import { useDispatch, useStore } from 'src/context';
import { Icon } from 'src/components/icon';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { ContainerTitle, ContainerContent, ContainerButtons, SubmitButton, SubmitContainer, ContainerExplanation } from './style';
import { Navigation } from 'src/pages/questions/components/navigation';

interface IProps {
	title: string;
	selected: string[];
	explanation?: string;
	children: React.ReactNode;
}

/**
 * The Container component.
 * @param {IProps} props - The props.
 */
export const Container = (props: IProps): ReactElement => {
    const locale = useStore(c => c.locale);
    const dispatch = useDispatch();
	
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
                    <SubmitButton disabled={!props.selected.length} onClick={handleSubmit}>
                        {locale.submit} <Icon icon={faCheck} />
                    </SubmitButton>
                </SubmitContainer>
                <Navigation />
            </ContainerButtons>
        </div>
    );
};