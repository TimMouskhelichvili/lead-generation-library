import { MyDefaultTheme } from 'src/theme';

/**
 * The default colors.
 */
const defaultColors = {
    background: '#181e1f',
    border: '#232c2d',
    color: '#f6fbfc',
    primary: '#BD4B4B'
};

/**
 * The dark theme.
 */
export const darkTheme: MyDefaultTheme = {
    colors: defaultColors,
    global: {
        radius: '7px'
    }
};