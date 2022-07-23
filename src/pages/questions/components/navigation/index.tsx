import React, { ReactElement } from 'react';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useStore } from 'src/context';
import { Icon } from 'src/components/icon';
import { NavigationContainer, NavigationButton } from './style';

/**
 * The Navigation component.
 */
export const Navigation = (): ReactElement | null => {
    const isPreviousDisabled = useStore(c => c.isPreviousDisabled);
    const isNextDisabled = useStore(c => c.isNextDisabled);	
    const question = useStore(c => c.question);

    const dispatch = useDispatch();

    const handleNext = (): void => dispatch({ type: 'NEXT' });
    const handlePrevious = (): void => dispatch({ type: 'PREVIOUS' });

    if (question.hideNavigation) {
        return null;
    }

    return (
        <NavigationContainer>
            <NavigationButton onClick={handlePrevious} disabled={isPreviousDisabled} type='button'>
                <Icon icon={faChevronLeft} />
            </NavigationButton>
            <NavigationButton onClick={handleNext} disabled={isNextDisabled} type='button'>
                <Icon icon={faChevronRight} />
            </NavigationButton>
        </NavigationContainer>
    );
};