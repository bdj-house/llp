import { PortableTextBlock } from 'sanity';
import { SanityKeyed } from 'sanity-codegen';

export const calculateReadingTime = (
  content: Array<SanityKeyed<PortableTextBlock>> = [],
  wordsPerMinute = 200,
  shorten?: boolean,
) => {
  if (!content?.length) {
    return '';
  }

  const text = content
    .filter(block => block._type === 'block' && typeof block.children !== 'undefined')
    .map(block =>
      Array.isArray((block as any).children)
        ? (block as any).children.map((child: any) => child.text).join('')
        : '',
    )
    .join(' ');

  const wordCount = text.trim().split(/\s+/).length;
  const minutes = Math.ceil(wordCount / wordsPerMinute);

  if (shorten) {
    return `${minutes} min${minutes > 1 ? 's' : ''} leitura`;
  }

  return `${minutes} minuto${minutes > 1 ? 's' : ''} de leitura`;
};
