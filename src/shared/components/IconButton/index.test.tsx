import { describe, it, expect, vi } from 'vitest';
import HomeIcon from '@mui/icons-material/Home';
import { IconButton } from './index';
import { render, screen } from '@/test/utils';

describe('IconButton', () => {
  it('should render icon button', () => {
    render(
      <IconButton action={() => {}} ariaLabel="Home">
        <HomeIcon />
      </IconButton>,
    );

    const button = screen.getByRole('button', { name: 'Home' });
    expect(button).toBeInTheDocument();
  });

  it('should call action when clicked', () => {
    const mockAction = vi.fn();

    render(
      <IconButton action={mockAction} ariaLabel="Test button">
        <HomeIcon />
      </IconButton>,
    );

    const button = screen.getByRole('button', { name: 'Test button' });
    button.click();

    expect(mockAction).toHaveBeenCalledTimes(1);
  });

  it('should render with different sizes', () => {
    const { rerender } = render(
      <IconButton action={() => {}} size="medium" ariaLabel="Medium">
        <HomeIcon />
      </IconButton>,
    );

    let button = screen.getByRole('button');
    expect(button).toBeInTheDocument();

    rerender(
      <IconButton action={() => {}} size="large" ariaLabel="Large">
        <HomeIcon />
      </IconButton>,
    );

    button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  it('should have accessible label', () => {
    render(
      <IconButton action={() => {}} ariaLabel="Navigate home">
        <HomeIcon />
      </IconButton>,
    );

    expect(screen.getByLabelText('Navigate home')).toBeInTheDocument();
  });

  it('should render successfully', () => {
    render(
      <IconButton action={() => {}} ariaLabel="Custom">
        <HomeIcon />
      </IconButton>,
    );

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });
});
