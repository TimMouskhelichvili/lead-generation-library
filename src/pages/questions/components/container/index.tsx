import React, { ReactElement } from 'react';
import { useDispatch, useStore } from 'src/context';
import { Icon } from 'src/components/icon';
import { faCheck, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { 
    ContainerTitle, 
    ContainerContent, 
    ContainerButtons, 
    SubmitButton, 
    NavigationContainer,
    SubmitContainer,
    NavigationButton
} from './style';

interface IProps {
	title: string;
	selected: string[];
	children: React.ReactNode;
}

/**
 * The Container component.
 * @param {IProps} props - The props.
 */
export const Container = (props: IProps): ReactElement => {
    const locale = useStore(c => c.locale);
    const current = useStore(c => c.current);	
    const dispatch = useDispatch();

    const handleNext = (): void => dispatch({ type: 'NEXT' });
    const handlePrevious = (): void => dispatch({ type: 'PREVIOUS' });
	
    const handleSubmit = (): void => {
        dispatch({ type: 'SUBMIT', value: props.selected });
    };

    return (
        <div>
            <ContainerTitle>{props.title}</ContainerTitle>
            <ContainerContent>
                {props.children}
            </ContainerContent>
            <ContainerButtons>
                <SubmitContainer>
                    <SubmitButton disabled={!props.selected.length} onClick={handleSubmit}>
                        {locale.submit} <Icon icon={faCheck} />
                    </SubmitButton>
                </SubmitContainer>
                <NavigationContainer>
                    <NavigationButton onClick={handlePrevious} disabled={!current}>
                        <Icon icon={faChevronLeft} />
                    </NavigationButton>
                    <NavigationButton onClick={handleNext}>
                        <Icon icon={faChevronRight} />
                    </NavigationButton>
                </NavigationContainer>
            </ContainerButtons>
        </div>
    );
};