import { createRoot } from 'react-dom/client';
import React from 'react';
import { IConfiguration } from 'src/interfaces/IConfiguration';
import { PublicDispatch } from 'src/context/types/dispatch';
import { validateConfig } from 'src/utils/defaults';
import { App } from 'src/components/app';
import { MyTheme } from './theme';

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
	 * Changes the theme.
	 * @param {MyTheme} value - The theme.
	 */
    public changeTheme (value: MyTheme): void {
        this.dispatch?.({ type: 'CHANGE_THEME', value });
    }
	
    /**
     * Returns the version of the library.
     */
    public getVersion (): string {
        return __VERSION__;
    }

}

window.LeadGenerationLibrary = new LeadGenerationLibrary();