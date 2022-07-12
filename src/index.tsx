import ReactDOM from 'react-dom';
import React from 'react';
import { IConfiguration } from 'src/interfaces/IConfiguration';
import { App } from 'src/components/app';

export class LeadGenerationLibrary {

    /**
	 * Initializes the lead generation library.
	 * @param {HTMLElement} element - The element.
	 * @param {IConfiguration} config - The config.
	 */
    public init (element: HTMLElement, config: IConfiguration): void {
        ReactDOM.render(<App config={config} />, element);
    }

    /**
     * Returns the version of the library.
     */
    public getVersion (): string {
        return __VERSION__;
    }

}

window.LeadGenerationLibrary = new LeadGenerationLibrary();