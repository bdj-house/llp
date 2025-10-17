import { describe, it, expect } from 'vitest';
import { If } from './index';
import { render, screen } from '@/test/utils';

describe('If Component', () => {
  it('should render children when condition is true', () => {
    render(
      <If condition={true}>
        <div>Visible content</div>
      </If>,
    );

    expect(screen.getByText('Visible content')).toBeInTheDocument();
  });

  it('should not render children when condition is false', () => {
    render(
      <If condition={false}>
        <div>Hidden content</div>
      </If>,
    );

    expect(screen.queryByText('Hidden content')).not.toBeInTheDocument();
  });

  it('should render elseRender when condition is false', () => {
    render(
      <If condition={false} elseRender={<div>Else content</div>}>
        <div>Main content</div>
      </If>,
    );

    expect(screen.getByText('Else content')).toBeInTheDocument();
    expect(screen.queryByText('Main content')).not.toBeInTheDocument();
  });

  it('should apply sx props to wrapper', () => {
    render(
      <If condition={true} sx={{ padding: 2 }}>
        <div>Content</div>
      </If>,
    );

    expect(screen.getByText('Content')).toBeInTheDocument();
  });

  it('should handle falsy conditions correctly', () => {
    const { rerender } = render(
      <If condition={0 as any}>
        <div>Content</div>
      </If>,
    );

    expect(screen.queryByText('Content')).not.toBeInTheDocument();

    rerender(
      <If condition={'' as any}>
        <div>Content</div>
      </If>,
    );

    expect(screen.queryByText('Content')).not.toBeInTheDocument();
  });
});
