import { darken, lighten } from 'polished';
import { MyDefaultTheme } from 'src/theme';

/**
 * The default colors.
 */
const defaultColors = {
    background: '#181e1f',
    border: '#232c2d',
    color: '#f6fbfc',
    error: 'red',
    primary: '',
    primaryDarken: '',
    success: 'green'
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
            button: {
                background: darken(.07, defaultColors.background),
                hoveredBackground: darken(.08, defaultColors.background)
            },
            item: {
                background: lighten(.01, defaultColors.border),
                border: darken(.07, defaultColors.border), 
                hoveredBackground: lighten(.03, defaultColors.border),
                hoveredBorder: darken(.08, defaultColors.border) 
            },
            navigation: {
                background: lighten(.05, defaultColors.border),
                border: darken(.07, defaultColors.border),
                color: darken(.06, defaultColors.border),
                hoveredBackground: lighten(.07, defaultColors.border),
                hoveredBorder: darken(.09, defaultColors.border)
            }
        }
    }
};