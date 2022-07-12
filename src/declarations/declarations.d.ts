import { MyDefaultTheme } from 'src/theme/types/myDefaultTheme';

/**
 * Adds the theme to the styled components.
 */
declare module 'styled-components' {
	// eslint-disable-next-line @typescript-eslint/no-empty-interface
	interface DefaultTheme extends MyDefaultTheme {
		
	}
}