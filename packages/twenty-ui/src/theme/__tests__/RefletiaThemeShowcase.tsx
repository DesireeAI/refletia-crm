/**
 * Refletia Theme Showcase
 * 
 * Component to showcase all Refletia colors and theme variations
 * for visual validation and testing purposes
 */

import React, { useState } from 'react';
import styled from '@emotion/styled';
import { ThemeContextProvider, ThemeType } from '@ui/theme';
import { Button } from '@ui/input/button';
import { Card } from '@ui/layout/card';
import { Tag } from '@ui/components/tag';
import { IconRefletiaStar } from '@ui/display/icon';
import { 
  REFLETIA_COLORS_LIGHT, 
  REFLETIA_COLORS_DARK,
  MAIN_COLORS_LIGHT,
  MAIN_COLORS_DARK 
} from '@ui/theme';

const ShowcaseContainer = styled.div`
  padding: 24px;
  background: ${({ theme }) => theme.background.primary};
  color: ${({ theme }) => theme.font.color.primary};
  min-height: 100vh;
`;

const Section = styled.section`
  margin-bottom: 48px;
`;

const SectionTitle = styled.h2`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 24px;
  color: ${({ theme }) => theme.font.color.primary};
`;

const ColorGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
  margin-bottom: 24px;
`;

const ColorCard = styled.div`
  padding: 16px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.border.color.medium};
`;

const ColorSwatch = styled.div<{ color: string }>`
  width: 100%;
  height: 60px;
  background-color: ${({ color }) => color};
  border-radius: 4px;
  margin-bottom: 8px;
`;

const ColorLabel = styled.div`
  font-size: 12px;
  font-weight: 600;
  margin-bottom: 4px;
`;

const ColorValue = styled.div`
  font-size: 11px;
  font-family: monospace;
  opacity: 0.8;
`;

const ComponentShowcase = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  margin-bottom: 24px;
`;

const ComponentCard = styled(Card)`
  padding: 16px;
  min-width: 200px;
`;

export const RefletiaThemeShowcase = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const theme: ThemeType = {
    font: {
      color: {
        primary: isDarkMode ? '#ffffff' : '#000000',
        secondary: isDarkMode ? '#e5e7eb' : '#374151',
        extraLight: isDarkMode ? '#9ca3af' : '#6b7280',
      },
      size: {
        md: '14px',
      },
    },
    background: {
      primary: isDarkMode ? '#111827' : '#ffffff',
      secondary: isDarkMode ? '#1f2937' : '#f9fafb',
      tertiary: isDarkMode ? '#374151' : '#f3f4f6',
      transparent: {
        light: 'rgba(255,255,255,0.1)',
        medium: 'rgba(255,255,255,0.2)',
      },
    },
    border: {
      color: {
        medium: isDarkMode ? '#374151' : '#e5e7eb',
      },
      radius: {
        sm: '4px',
        md: '8px',
        xl: '12px',
        xxl: '16px',
      },
    },
    tag: {
      background: isDarkMode ? MAIN_COLORS_DARK : MAIN_COLORS_LIGHT,
      text: isDarkMode ? MAIN_COLORS_DARK : MAIN_COLORS_LIGHT,
    },
    color: isDarkMode ? MAIN_COLORS_DARK : MAIN_COLORS_LIGHT,
    accent: {
      tertiary: isDarkMode ? REFLETIA_COLORS_DARK.primary.blueDark : REFLETIA_COLORS_LIGHT.primary.blueDark,
    },
    spacing: (value: number) => `${value * 4}px`,
  } as ThemeType;

  const currentColors = isDarkMode ? REFLETIA_COLORS_DARK : REFLETIA_COLORS_LIGHT;

  return (
    <ThemeContextProvider theme={theme}>
      <ShowcaseContainer>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
          <h1 style={{ fontSize: '32px', fontWeight: 'bold', margin: 0 }}>
            🎨 Refletia Theme Showcase
          </h1>
          <Button 
            variant="primary" 
            onClick={() => setIsDarkMode(!isDarkMode)}
          >
            {isDarkMode ? '☀️ Light' : '🌙 Dark'}
          </Button>
        </div>

        {/* Refletia Primary Colors */}
        <Section>
          <SectionTitle>🌟 Refletia Primary Colors</SectionTitle>
          <ColorGrid>
            {Object.entries(currentColors.primary).map(([name, color]) => (
              <ColorCard key={name}>
                <ColorSwatch color={color} />
                <ColorLabel>{name}</ColorLabel>
                <ColorValue>{color}</ColorValue>
              </ColorCard>
            ))}
          </ColorGrid>
        </Section>

        {/* Refletia Secondary Colors */}
        <Section>
          <SectionTitle>🎨 Refletia Secondary Colors</SectionTitle>
          <ColorGrid>
            {Object.entries(currentColors.secondary).slice(0, 6).map(([name, color]) => (
              <ColorCard key={name}>
                <ColorSwatch color={color} />
                <ColorLabel>{name}</ColorLabel>
                <ColorValue>{color}</ColorValue>
              </ColorCard>
            ))}
          </ColorGrid>
        </Section>

        {/* Refletia Semantic Colors */}
        <Section>
          <SectionTitle>✨ Refletia Semantic Colors</SectionTitle>
          <ColorGrid>
            {Object.entries(currentColors.semantic).map(([name, color]) => (
              <ColorCard key={name}>
                <ColorSwatch color={color} />
                <ColorLabel>{name}</ColorLabel>
                <ColorValue>{color}</ColorValue>
              </ColorCard>
            ))}
          </ColorGrid>
        </Section>

        {/* Component Showcase */}
        <Section>
          <SectionTitle>🧩 Component Showcase</SectionTitle>
          <ComponentShowcase>
            <ComponentCard>
              <h4 style={{ marginTop: 0, marginBottom: '12px' }}>Buttons</h4>
              <div style={{ display: 'flex', gap: '8px', flexDirection: 'column' }}>
                <Button variant="primary" size="small">Primary</Button>
                <Button variant="secondary" size="small">Secondary</Button>
                <Button variant="tertiary" size="small">Tertiary</Button>
              </div>
            </ComponentCard>

            <ComponentCard>
              <h4 style={{ marginTop: 0, marginBottom: '12px' }}>Tags</h4>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                <Tag color="blue" weight="regular" variant="solid">Blue</Tag>
                <Tag color="pink" weight="regular" variant="solid">Pink</Tag>
                <Tag color="yellow" weight="regular" variant="solid">Yellow</Tag>
                <Tag color="green" weight="regular" variant="solid">Green</Tag>
              </div>
            </ComponentCard>

            <ComponentCard>
              <h4 style={{ marginTop: 0, marginBottom: '12px' }}>Icon</h4>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <IconRefletiaStar size={24} />
                <span>Refletia Star</span>
              </div>
            </ComponentCard>
          </ComponentShowcase>
        </Section>

        {/* Theme Info */}
        <Section>
          <SectionTitle>📋 Theme Information</SectionTitle>
          <ComponentCard>
            <p><strong>Current Mode:</strong> {isDarkMode ? 'Dark' : 'Light'}</p>
            <p><strong>Primary Brand:</strong> {currentColors.primary.blueDark}</p>
            <p><strong>Secondary Brand:</strong> {currentColors.primary.roseVibrant}</p>
            <p><strong>Accent Brand:</strong> {currentColors.primary.goldenYellow}</p>
            <p><strong>Total Colors:</strong> {Object.keys(currentColors.primary).length + Object.keys(currentColors.secondary).length + Object.keys(currentColors.semantic).length}</p>
          </ComponentCard>
        </Section>
      </ShowcaseContainer>
    </ThemeContextProvider>
  );
};
