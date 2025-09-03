import type { SchemaTypeDefinition } from 'sanity';
import aboutPage from './about';
import articlePage from './article';
import operationAreaSchema from './operationArea';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [aboutPage, articlePage, operationAreaSchema],
};

const typesGenerate = [aboutPage, articlePage, operationAreaSchema];

export default typesGenerate;
