import React, { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { PublicDispatch } from 'src/context/types/dispatch';
import { useStore, usePublicDispatch } from 'src/context';
import { getDefaultTheme } from 'src/theme';
import { Quiz } from 'src/components/quiz';

interface IAppWithThemeProps {
	setPublicState: (p: PublicDispatch) => void;
}

/**
 * The AppWithTheme component.
 * @param {IAppWithThemeProps} props - The props.
 */
export const AppWithTheme = (props: IAppWithThemeProps): React.ReactElement => {
    const theme = useStore(c => c.theme);
    const styles = useStore(c => c.styles);
    const publicDispatch = usePublicDispatch();

    const themeObj = getDefaultTheme(theme, styles);

    useEffect(() => {
        props.setPublicState(publicDispatch);
    }, [ publicDispatch, props ]);

    return (
        <ThemeProvider theme={themeObj}>
            <Quiz />
        </ThemeProvider>
    );
};