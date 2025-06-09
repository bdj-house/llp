import type { SchemaTypeDefinition } from 'sanity';
import aboutPage from './about';
import articlePage from './article';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [aboutPage, articlePage],
};

const typesGenerate = [aboutPage, articlePage];

export default typesGenerate;
