import React from 'react';
import { ThemeProvider } from 'styled-components';
import { getDefaultTheme } from 'src/theme';
import { Quiz } from 'src/components/quiz';
import { useStore } from 'src/context';

/**
 * The AppWithTheme component.
 */
export const AppWithTheme = (): React.ReactElement => {
    const theme = useStore(c => c.theme);
    const styles = useStore(c => c.styles);

    const themeObj = getDefaultTheme(theme, styles);

    return (
        <ThemeProvider theme={themeObj}>
            <Quiz />
        </ThemeProvider>
    );
};