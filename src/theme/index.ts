import { lightTheme } from 'src/theme/themes/light';
import { darkTheme } from 'src/theme/themes/dark';
import { configuration } from 'src/configuration';
import { DefaultTheme } from 'styled-components';

/**
 * The themes.
 */
export const themes = {
    dark: darkTheme,
    light: lightTheme
};

export type MyTheme = keyof typeof themes;

export type MyDefaultTheme = typeof lightTheme;

/**
 * Returns the default theme.
 * @param {MyTheme} theme - The theme.
 */
export const getDefaultTheme = (theme?: MyTheme): DefaultTheme => {
    const def = themes[configuration.theme as MyTheme];

    if (!theme) {
        return def;
    }
	 
    return themes[theme] ? themes[theme] : def;
};