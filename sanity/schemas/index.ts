// Sanity schema index — import into the Studio's schemaTypes at deploy time.
// `localizedString` / `localizedText` are the standard document-internationalization
// object types ({ en, es }) used across all schemas in this folder.
import location from './location';
import { serviceCategory, service } from './service';
import review from './review';
import faq from './faq';
import post from './post';

export const schemaTypes = [location, serviceCategory, service, review, faq, post];
export default schemaTypes;
