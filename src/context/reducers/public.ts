import { Reducer } from 'src/context/types/reducer';
import { IStyles } from 'src/interfaces/IStyles';
import { getStyles, MyTheme } from 'src/theme';

export type PublicAction = 'CHANGE_THEME' | 'CHANGE_STYLES';

/**
 * The public reducer.
 */
export const publicReducer: Reducer<PublicAction> = {
    'CHANGE_STYLES': (api, newStyles: Partial<IStyles>) => {
        const styles = getStyles({
            ...api.getState().styles,
            ...newStyles
        });

        api.setState({
            styles
        });
    },
    'CHANGE_THEME': (api, theme: MyTheme) => {
        api.setState({
            theme
        });
    }
};