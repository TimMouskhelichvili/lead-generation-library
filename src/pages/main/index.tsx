import React, { ReactElement } from 'react';
import { useStore } from 'src/context';
import { MainDescription, MainH1, MainContainer, MainImageContainer, MainImage, MainButton } from './style';

/**
 * The Main component.
 */
export const Main = (): ReactElement => {
    const title = useStore(c => c.title);
    const image = useStore(c => c.image);
    const locale = useStore(c => c.locale);
    const description = useStore(c => c.description);

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
            <MainButton type='button'>{locale.start}</MainButton>
        </MainContainer>
    );
};