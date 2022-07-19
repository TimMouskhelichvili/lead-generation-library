import React, { ReactElement } from 'react';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useStore } from 'src/context';
import { Icon } from 'src/components/icon';
import { NavigationContainer, NavigationButton } from './style';

/**
 * The Navigation component.
 */
export const Navigation = (): ReactElement => {
    const isPreviousDisabled = useStore(c => c.isPreviousDisabled);
    const isNextDisabled = useStore(c => c.isNextDisabled);	

    const dispatch = useDispatch();

    const handleNext = (): void => dispatch({ type: 'NEXT' });
    const handlePrevious = (): void => dispatch({ type: 'PREVIOUS' });

    return (
        <NavigationContainer>
            <NavigationButton onClick={handlePrevious} disabled={isPreviousDisabled}>
                <Icon icon={faChevronLeft} />
            </NavigationButton>
            <NavigationButton onClick={handleNext} disabled={isNextDisabled}>
                <Icon icon={faChevronRight} />
            </NavigationButton>
        </NavigationContainer>
    );
};