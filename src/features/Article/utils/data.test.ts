import { PortableTextBlock } from 'sanity';
import { SanityKeyed } from 'sanity-codegen';
import { describe, it, expect } from 'vitest';
import { calculateReadingTime } from './data';

describe('calculateReadingTime', () => {
  it('should return empty string for empty content', () => {
    expect(calculateReadingTime([])).toBe('');
  });

  it('should return empty string for undefined content', () => {
    expect(calculateReadingTime(undefined)).toBe('');
  });

  it('should calculate reading time correctly', () => {
    const content: Array<SanityKeyed<PortableTextBlock>> = [
      {
        _key: '1',
        _type: 'block',
        children: [
          {
            _key: '1-1',
            _type: 'span',
            text: 'This is a test with exactly twenty words to calculate reading time for this specific test case here now.',
            marks: [],
          },
        ],
        markDefs: [],
        style: 'normal',
      },
    ];

    const result = calculateReadingTime(content, 200, false);
    expect(result).toBe('1 minuto de leitura');
  });

  it('should return plural for multiple minutes', () => {
    // Create content with ~400 words (2 minutes at 200 wpm)
    const longText = 'word '.repeat(400);
    const content: Array<SanityKeyed<PortableTextBlock>> = [
      {
        _key: '1',
        _type: 'block',
        children: [{ _key: '1-1', _type: 'span', text: longText, marks: [] }],
        markDefs: [],
        style: 'normal',
      },
    ];

    const result = calculateReadingTime(content, 200, false);
    expect(result).toBe('2 minutos de leitura');
  });

  it('should return shortened format when requested', () => {
    const content: Array<SanityKeyed<PortableTextBlock>> = [
      {
        _key: '1',
        _type: 'block',
        children: [{ _key: '1-1', _type: 'span', text: 'word '.repeat(400), marks: [] }],
        markDefs: [],
        style: 'normal',
      },
    ];

    const result = calculateReadingTime(content, 200, true);
    expect(result).toBe('2 mins leitura');
  });

  it('should handle content with multiple blocks', () => {
    const content: Array<SanityKeyed<PortableTextBlock>> = [
      {
        _key: '1',
        _type: 'block',
        children: [{ _key: '1-1', _type: 'span', text: 'First block with some words', marks: [] }],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '2',
        _type: 'block',
        children: [{ _key: '2-1', _type: 'span', text: 'Second block with more words', marks: [] }],
        markDefs: [],
        style: 'normal',
      },
    ];

    const result = calculateReadingTime(content, 200, false);
    expect(result).toBeTruthy();
    expect(result).toContain('leitura');
  });

  it('should filter out non-block types', () => {
    const content: any = [
      {
        _key: '1',
        _type: 'image',
        asset: {},
      },
      {
        _key: '2',
        _type: 'block',
        children: [{ _key: '2-1', _type: 'span', text: 'Some text here', marks: [] }],
        markDefs: [],
        style: 'normal',
      },
    ];

    const result = calculateReadingTime(content, 200, false);
    expect(result).toBe('1 minuto de leitura');
  });

  it('should use custom words per minute', () => {
    const content: Array<SanityKeyed<PortableTextBlock>> = [
      {
        _key: '1',
        _type: 'block',
        children: [{ _key: '1-1', _type: 'span', text: 'word '.repeat(300), marks: [] }],
        markDefs: [],
        style: 'normal',
      },
    ];

    // At 100 wpm, 300 words should take 3 minutes
    const result = calculateReadingTime(content, 100, false);
    expect(result).toBe('3 minutos de leitura');
  });
});
