import { enLocale } from 'src/locale/languages/en';
import { frLocale } from 'src/locale/languages/fr';
import { configuration } from 'src/configuration';

export const languages = {
    en: enLocale,
    fr: frLocale
};

export type MyLocale = typeof enLocale;

export type MyLanguage = keyof typeof languages;

/**
 * Returns the default locale.
 * @param {MyLanguage} language - The language.
 */
export const getDefaultLocale = (language?: MyLanguage): MyLocale => {
    const def = languages[configuration.language as MyLanguage];

    if (!language) {
        return def;
    }
	 
    return languages[language] ? languages[language] : def;
};