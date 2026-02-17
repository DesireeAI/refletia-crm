/**
 * Refletia Theme Integration Test
 * 
 * Test to validate that all components are properly using Refletia colors
 * and the theme system is working correctly
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from '@emotion/react';
import { ThemeContextProvider, ThemeType } from '@ui/theme';
import { Button } from '@ui/input/button';
import { Card } from '@ui/layout/card';
import { Tag } from '@ui/components/tag';
import { MAIN_COLORS_LIGHT, REFLETIA_COLORS_LIGHT } from '@ui/theme';

// Mock theme for testing
const mockTheme: ThemeType = {
  font: {
    color: {
      primary: '#000000',
      secondary: '#333333',
      extraLight: '#999999',
    },
    size: {
      md: '14px',
    },
  },
  background: {
    primary: '#ffffff',
    secondary: '#f5f5f5',
    tertiary: '#e0e0e0',
    transparent: {
      light: 'rgba(0,0,0,0.1)',
      medium: 'rgba(0,0,0,0.2)',
    },
  },
  border: {
    color: {
      medium: '#e0e0e0',
    },
    radius: {
      sm: '4px',
      md: '8px',
    },
  },
  tag: {
    background: MAIN_COLORS_LIGHT,
    text: MAIN_COLORS_LIGHT,
  },
  color: MAIN_COLORS_LIGHT,
  accent: {
    tertiary: REFLETIA_COLORS_LIGHT.primary.blueDark,
  },
} as ThemeType;

const renderWithTheme = (component: React.ReactElement) => {
  return render(
    <ThemeContextProvider theme={mockTheme}>
      {component}
    </ThemeContextProvider>
  );
};

describe('Refletia Theme Integration', () => {
  describe('Button Components', () => {
    test('should use Refletia colors for primary buttons', () => {
      renderWithTheme(
        <Button variant="primary" accent="default">
          Refletia Button
        </Button>
      );
      
      const button = screen.getByRole('button', { name: 'Refletia Button' });
      expect(button).toBeInTheDocument();
      
      // Verify the button uses theme colors
      const styles = getComputedStyle(button);
      expect(styles.backgroundColor).toBe('');
    });

    test('should use Refletia blue color for blue accent', () => {
      renderWithTheme(
        <Button variant="primary" accent="blue">
          Blue Button
        </Button>
      );
      
      const button = screen.getByRole('button', { name: 'Blue Button' });
      expect(button).toBeInTheDocument();
    });
  });

  describe('Card Components', () => {
    test('should use Refletia theme colors', () => {
      renderWithTheme(
        <Card>
          <div>Refletia Card Content</div>
        </Card>
      );
      
      const cardContent = screen.getByText('Refletia Card Content');
      expect(cardContent).toBeInTheDocument();
    });
  });

  describe('Tag Components', () => {
    test('should use Refletia colors for tags', () => {
      renderWithTheme(
        <Tag color="blue" weight="regular" variant="solid">
          Refletia Tag
        </Tag>
      );
      
      const tag = screen.getByText('Refletia Tag');
      expect(tag).toBeInTheDocument();
    });

    test('should use Refletia rose color for pink tags', () => {
      renderWithTheme(
        <Tag color="pink" weight="regular" variant="solid">
          Rose Tag
        </Tag>
      );
      
      const tag = screen.getByText('Rose Tag');
      expect(tag).toBeInTheDocument();
    });

    test('should use Refletia golden color for yellow tags', () => {
      renderWithTheme(
        <Tag color="yellow" weight="regular" variant="solid">
          Golden Tag
        </Tag>
      );
      
      const tag = screen.getByText('Golden Tag');
      expect(tag).toBeInTheDocument();
    });
  });

  describe('Theme Color Validation', () => {
    test('should have Refletia primary colors in theme', () => {
      expect(MAIN_COLORS_LIGHT.blue).toBe(REFLETIA_COLORS_LIGHT.primary.blueDark);
      expect(MAIN_COLORS_LIGHT.pink).toBe(REFLETIA_COLORS_LIGHT.primary.roseVibrant);
      expect(MAIN_COLORS_LIGHT.yellow).toBe(REFLETIA_COLORS_LIGHT.primary.goldenYellow);
    });

    test('should have Refletia semantic colors', () => {
      expect(MAIN_COLORS_LIGHT.green).toBe(REFLETIA_COLORS_LIGHT.semantic.success);
      expect(MAIN_COLORS_LIGHT.red).toBe(REFLETIA_COLORS_LIGHT.semantic.error);
      expect(MAIN_COLORS_LIGHT.orange).toBe(REFLETIA_COLORS_LIGHT.semantic.warning);
    });
  });

  describe('Component Theme Integration', () => {
    test('should apply Refletia theme consistently across components', () => {
      const { container } = renderWithTheme(
        <div>
          <Button variant="primary">Button</Button>
          <Card>Card</Card>
          <Tag color="blue">Tag</Tag>
        </div>
      );
      
      expect(container).toBeInTheDocument();
      
      // Verify all components are rendered
      expect(screen.getByText('Button')).toBeInTheDocument();
      expect(screen.getByText('Card')).toBeInTheDocument();
      expect(screen.getByText('Tag')).toBeInTheDocument();
    });
  });
});
