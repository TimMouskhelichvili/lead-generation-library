import { darken, lighten } from 'polished';
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
    },
    pages: {
        questions: {
            item: {
                background: lighten(.01, defaultColors.border),
                hoveredBackground: darken(.05, defaultColors.border)
            }
        }
    }
};