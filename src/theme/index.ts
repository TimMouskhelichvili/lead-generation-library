import { lightTheme } from 'src/theme/themes/light';
import { darkTheme } from 'src/theme/themes/dark';
import { configuration } from 'src/configuration';
import { DefaultTheme } from 'styled-components';
import { IStyles } from 'src/interfaces/IStyles';

/**
 * The themes.
 */
export const themes = {
    dark: darkTheme,
    light: lightTheme
};

/**
 * The sizes.
 */
export const sizes = {
    smallTablet: '800px'
};

export type MyTheme = keyof typeof themes;

export type MyDefaultTheme = typeof lightTheme;

/**
 * Returns the default theme.
 * @param {MyTheme} theme - The theme.
 * @param {IStyles} styles - The styles.
 */
export const getDefaultTheme = (theme: MyTheme, styles: IStyles): DefaultTheme => {
    const def = themes[theme] ? 
        themes[theme] : themes[configuration.theme as MyTheme];

    def.colors.primary = styles.primary;
    def.colors.primaryDarken = styles.primaryHovered;
	 
    return def;
};