import { enLocales } from 'src/locales/languages/en';
import { configuration } from 'src/configuration';

export const languages = {
    en: enLocales
};

export type MyLocale = typeof enLocales;

export type MyLanguage = keyof typeof languages;

/**
 * Returns the default language.
 * @param {MyLanguage} language - The language.
 */
export const getDefaultLocale = (language?: MyLanguage): MyLocale => {
    const def = languages[configuration.language as MyLanguage];

    if (!language) {
        return def;
    }
	 
    return languages[language] ? languages[language] : def;
};