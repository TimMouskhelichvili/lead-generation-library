import { Reducer } from 'src/context/types/reducer';
import { MyTheme } from 'src/theme';

export type PublicAction = 'CHANGE_THEME';

/**
 * The public reducer.
 */
export const publicReducer: Reducer<PublicAction> = {
    'CHANGE_THEME': (api, theme: MyTheme) => {
        api.setState({
            theme
        });
    }
};