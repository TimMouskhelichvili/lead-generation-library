import { LeadGenerationLibrary } from 'src';

declare global {
	interface Window {

		/**
		 * The lead generation library.
		 */
		 LeadGenerationLibrary: LeadGenerationLibrary;

	}

	/**
	 * The version.
	 */
	const __VERSION__: string;

}

export {
    LeadGenerationLibrary
};