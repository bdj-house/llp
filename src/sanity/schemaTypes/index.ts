import type { SchemaTypeDefinition } from 'sanity';
import aboutPage from './about';
import articlePage from './article';
import associateSchema from './associate';
import homePageSchema from './home';
import operationAreaSchema from './operationArea';
import ourSpaceSchema from './ourSpace';
import siteSettingsSchema from './siteSettings';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    homePageSchema,
    aboutPage,
    associateSchema,
    operationAreaSchema,
    articlePage,
    ourSpaceSchema,
    siteSettingsSchema,
  ],
};

const typesGenerate = [
  homePageSchema,
  aboutPage,
  associateSchema,
  operationAreaSchema,
  articlePage,
  ourSpaceSchema,
  siteSettingsSchema,
];

export default typesGenerate;
