import React, { ReactElement } from 'react';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useStore } from 'src/context';
import { Icon } from 'src/components/icon';
import { NavigationContainer, NavigationButton } from './style';

/**
 * The Navigation component.
 */
export const Navigation = (): ReactElement => {
    const current = useStore(c => c.current);	
    const dispatch = useDispatch();

    const handleNext = (): void => dispatch({ type: 'NEXT' });
    const handlePrevious = (): void => dispatch({ type: 'PREVIOUS' });

    return (
        <NavigationContainer>
            <NavigationButton onClick={handlePrevious} disabled={!current}>
                <Icon icon={faChevronLeft} />
            </NavigationButton>
            <NavigationButton onClick={handleNext}>
                <Icon icon={faChevronRight} />
            </NavigationButton>
        </NavigationContainer>
    );
};