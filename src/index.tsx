import { createRoot } from 'react-dom/client';
import React from 'react';
import { IConfiguration } from 'src/interfaces/IConfiguration';
import { PublicDispatch } from 'src/context/types/dispatch';
import { validateConfig } from 'src/utils/defaults';
import { IStyles } from 'src/interfaces/IStyles';
import { App } from 'src/components/app';
import { MyTheme } from 'src/theme';

export class LeadGenerationLibrary {

    private dispatch: PublicDispatch | null = null;
	
    /**
	 * Initializes the lead generation library.
	 * @param {HTMLElement} element - The element.
	 * @param {IConfiguration} config - The config.
	 */
    public init (element: HTMLElement, config: IConfiguration): void {
        validateConfig(config);

        const shadow = element.attachShadow({ mode: 'closed' });
        const section = document.createElement('section');
        shadow.appendChild(section);

        const setPublicState = (p: PublicDispatch): void => {
            this.dispatch = p;
        };

        const root = createRoot(shadow);
        root.render(
            <App 
                config={config} 
                styleSection={section} 
                setPublicState={setPublicState} />
        );
    }

    /**
	 * Sets the theme.
	 * @param {MyTheme} value - The theme.
	 */
    public setTheme (value: MyTheme): void {
        this.dispatch?.({ type: 'CHANGE_THEME', value });
    }

    /**
	 * Sets the styles.
	 * @param {Partial<IStyles>} value - The styles.
	 */
    public setStyles (value: Partial<IStyles>): void {
        this.dispatch?.({ type: 'CHANGE_STYLES', value });
    }
	
    /**
     * Returns the version of the library.
     */
    public getVersion (): string {
        return __VERSION__;
    }

}

window.LeadGenerationLibrary = new LeadGenerationLibrary();