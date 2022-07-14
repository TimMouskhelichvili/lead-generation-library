import { createRoot } from 'react-dom/client';
import React from 'react';
import { IConfiguration } from 'src/interfaces/IConfiguration';
import { validateConfig } from 'src/utils/defaults';
import { App } from 'src/components/app';

export class LeadGenerationLibrary {

    /**
	 * Initializes the lead generation library.
	 * @param {HTMLElement} element - The element.
	 * @param {IConfiguration} config - The config.
	 */
    public init (element: HTMLElement, config: IConfiguration): void {
        validateConfig(config);

        const root = createRoot(element);
        root.render(<App config={config} />);
    }

    /**
     * Returns the version of the library.
     */
    public getVersion (): string {
        return __VERSION__;
    }

}

window.LeadGenerationLibrary = new LeadGenerationLibrary();