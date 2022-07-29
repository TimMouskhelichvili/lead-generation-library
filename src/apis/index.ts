import axios from 'axios';
import { IResults } from 'src/interfaces/IResults';

/**
 * The send results.
 * @param {IResults} results - The results. 
 */
export const sendResults = async (results: IResults): Promise<void> => {
    await axios.post('https://webhook.site/33e4008a-1ee9-4007-bbc8-d33cc6b8bdd1', results);
};