import { darken, lighten } from 'polished';

/**
 * The default colors.
 */
const defaultColors = {
    background: '#fafafa',
    border: '#ededed',
    color: '#181e1f',
    primary: '#BD4B4B',
    primaryDarken: darken(.05, '#BD4B4B')
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
            button: {
                background: '#181e1f',
                hoveredBackground: darken(.05, '#181e1f')
            },
            item: {
                background: lighten(.01, defaultColors.border),
                border: darken(.04, defaultColors.border), 
                hoveredBackground: darken(.05, defaultColors.border),
                hoveredBorder: darken(.1, defaultColors.border)
            },
            navigation: {
                background: defaultColors.border,
                hoveredBackground: darken(.05, defaultColors.border)
            }
        }
    }
};