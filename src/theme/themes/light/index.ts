import { darken, lighten } from 'polished';

/**
 * The default colors.
 */
const defaultColors = {
    background: '#fafafa',
    border: '#ededed',
    color: '#181e1f',
    primary: '#BD4B4B'
};

/**
 * The light theme.
 */
export const lightTheme = {
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