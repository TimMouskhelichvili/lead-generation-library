import React, { ReactElement } from 'react';
import { useDispatch, useStore } from 'src/context';
import { MainDescription, MainH1, MainContainer, MainImageContainer, MainImage, MainButton } from './style';

/**
 * The Main component.
 */
export const Main = (): ReactElement => {
    const title = useStore(c => c.title);
    const image = useStore(c => c.image);
    const locale = useStore(c => c.locale);
    const description = useStore(c => c.description);

    const dispatch = useDispatch();

    const handleStartQuiz = (): void => {
        dispatch({ type: 'START_QUIZ' });
    };
	
    return (
        <MainContainer>
            <MainH1>{title}</MainH1>
            {image && (
                <MainImageContainer>
                    <MainImage src={image} />
                </MainImageContainer>
            )}
            {description && 
				<MainDescription>{description}</MainDescription>}
            <MainButton type='button' onClick={handleStartQuiz}>
                {locale.start}
            </MainButton>
        </MainContainer>
    );
};