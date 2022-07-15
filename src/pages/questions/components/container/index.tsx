import React, { ReactElement } from 'react';
import { useDispatch, useStore } from 'src/context';
import { ContainerTitle, ContainerContent, ContainerButtons, ContainerButton } from './style';

interface IProps {
	title: string;
	selected: string[];
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	children: any;
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
        dispatch({ type: 'NEXT' });
    };

    const hasPrevious = Boolean(current);
	
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
                    {locale.next}
                </ContainerButton>
            </ContainerButtons>
        </div>
    );
};