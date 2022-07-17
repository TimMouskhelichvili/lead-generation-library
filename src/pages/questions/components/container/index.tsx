import React, { ReactElement } from 'react';
import { useDispatch, useStore } from 'src/context';
import { Icon } from 'src/components/icon';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { ContainerTitle, ContainerContent, ContainerButtons, ContainerButton } from './style';

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

    const handlePrevious = (): void => {
        dispatch({ type: 'PREVIOUS' });
    };
	
    const handleNext = (): void => {
        dispatch({ 
            type: 'NEXT', 
            value: props.selected 
        });
    };

    const hasPrevious = false;

    return (
        <div>
            <ContainerTitle>{props.title}</ContainerTitle>
            <ContainerContent>
                {props.children}
            </ContainerContent>
            <ContainerButtons>
                {hasPrevious && (
                    <ContainerButton onClick={handlePrevious}>
                        {locale.previous}
                    </ContainerButton>
                )}
                <ContainerButton disabled={!props.selected.length} onClick={handleNext}>
                    {locale.next} <Icon icon={faCheck} />
                </ContainerButton>
            </ContainerButtons>
        </div>
    );
};