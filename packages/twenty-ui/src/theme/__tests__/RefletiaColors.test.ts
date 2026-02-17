/**
 * Refletia Colors Test
 * 
 * Test to validate that Refletia colors are properly implemented
 * and accessible through the theme system
 */

import { 
  REFLETIA_COLORS_LIGHT, 
  REFLETIA_COLORS_DARK,
  REFLETIA_COMPATIBILITY_LIGHT,
  REFLETIA_COMPATIBILITY_DARK,
  MAIN_COLORS_LIGHT,
  MAIN_COLORS_DARK
} from '../index';

describe('Refletia Colors Implementation', () => {
  describe('Refletia Color Constants', () => {
    test('should have all primary colors defined in light theme', () => {
      expect(REFLETIA_COLORS_LIGHT.primary.blueDark).toBe('#521262');
      expect(REFLETIA_COLORS_LIGHT.primary.roseVibrant).toBe('#edb069');
      expect(REFLETIA_COLORS_LIGHT.primary.goldenYellow).toBe('#e2ab2a');
      expect(REFLETIA_COLORS_LIGHT.primary.warmBeige).toBe('#d9ae89');
      expect(REFLETIA_COLORS_LIGHT.primary.deepPurple).toBe('#541463');
    });

    test('should have all primary colors defined in dark theme', () => {
      expect(REFLETIA_COLORS_DARK.primary.blueDark).toBe('#7c2b8f');
      expect(REFLETIA_COLORS_DARK.primary.roseVibrant).toBe('#f0c088');
      expect(REFLETIA_COLORS_DARK.primary.goldenYellow).toBe('#f0d866');
      expect(REFLETIA_COLORS_DARK.primary.warmBeige).toBe('#e8c4a3');
      expect(REFLETIA_COLORS_DARK.primary.deepPurple).toBe('#7a2b7e');
    });

    test('should have semantic colors defined', () => {
      expect(REFLETIA_COLORS_LIGHT.semantic.success).toBe('#22c55e');
      expect(REFLETIA_COLORS_LIGHT.semantic.warning).toBe('#f59e0b');
      expect(REFLETIA_COLORS_LIGHT.semantic.error).toBe('#ef4444');
      expect(REFLETIA_COLORS_LIGHT.semantic.info).toBe('#3b82f6');
    });

    test('should have 15 total colors in the palette', () => {
      const primaryCount = Object.keys(REFLETIA_COLORS_LIGHT.primary).length;
      const secondaryCount = Object.keys(REFLETIA_COLORS_LIGHT.secondary).length;
      const semanticCount = Object.keys(REFLETIA_COLORS_LIGHT.semantic).length;
      
      expect(primaryCount).toBe(5);
      expect(secondaryCount).toBe(12);
      expect(semanticCount).toBe(4);
    });
  });

  describe('Refletia Compatibility Layer', () => {
    test('should map Refletia colors to existing color names', () => {
      expect(REFLETIA_COMPATIBILITY_LIGHT.blue).toBe('#521262');
      expect(REFLETIA_COMPATIBILITY_LIGHT.pink).toBe('#edb069');
      expect(REFLETIA_COMPATIBILITY_LIGHT.yellow).toBe('#e2ab2a');
      expect(REFLETIA_COMPATIBILITY_LIGHT.green).toBe('#22c55e');
      expect(REFLETIA_COMPATIBILITY_LIGHT.red).toBe('#ef4444');
    });

    test('should have all required color mappings for compatibility', () => {
      const requiredColors = [
        'red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink',
        'amber', 'lime', 'teal', 'cyan', 'gray', 'bronze', 'gold', 'brown',
        'ruby', 'crimson', 'tomato', 'grass', 'jade', 'mint',
        'turquoise', 'sky', 'iris', 'violet', 'plum'
      ];

      requiredColors.forEach(color => {
        expect(REFLETIA_COMPATIBILITY_LIGHT).toHaveProperty(color);
        expect(REFLETIA_COMPATIBILITY_DARK).toHaveProperty(color);
      });
    });
  });

  describe('Main Colors Integration', () => {
    test('should use Refletia colors in MAIN_COLORS_LIGHT', () => {
      expect(MAIN_COLORS_LIGHT.blue).toBe('#521262');
      expect(MAIN_COLORS_LIGHT.pink).toBe('#edb069');
      expect(MAIN_COLORS_LIGHT.yellow).toBe('#e2ab2a');
      expect(MAIN_COLORS_LIGHT.green).toBe('#22c55e');
      expect(MAIN_COLORS_LIGHT.red).toBe('#ef4444');
    });

    test('should use Refletia dark colors in MAIN_COLORS_DARK', () => {
      expect(MAIN_COLORS_DARK.blue).toBe('#7c2b8f');
      expect(MAIN_COLORS_DARK.pink).toBe('#f0c088');
      expect(MAIN_COLORS_DARK.yellow).toBe('#f0d866');
      expect(MAIN_COLORS_DARK.green).toBe('#34d399');
      expect(MAIN_COLORS_DARK.red).toBe('#f87171');
    });

    test('should maintain all required main color properties', () => {
      const requiredMainColors = [
        'red', 'ruby', 'crimson', 'tomato',
        'orange', 'amber', 'yellow',
        'lime', 'grass', 'green', 'jade', 'mint',
        'turquoise', 'cyan', 'sky', 'blue',
        'iris', 'violet', 'purple', 'plum', 'pink',
        'bronze', 'gold', 'brown', 'gray'
      ];

      requiredMainColors.forEach(color => {
        expect(MAIN_COLORS_LIGHT).toHaveProperty(color);
        expect(MAIN_COLORS_DARK).toHaveProperty(color);
      });
    });
  });

  describe('Color Format Validation', () => {
    test('should have valid hex color format', () => {
      const hexColorRegex = /^#[0-9A-Fa-f]{6}$/;
      
      Object.values(REFLETIA_COLORS_LIGHT.primary).forEach(color => {
        expect(color).toMatch(hexColorRegex);
      });
      
      Object.values(REFLETIA_COLORS_DARK.primary).forEach(color => {
        expect(color).toMatch(hexColorRegex);
      });
    });

    test('should have consistent color structure between light and dark themes', () => {
      const lightKeys = Object.keys(REFLETIA_COLORS_LIGHT);
      const darkKeys = Object.keys(REFLETIA_COLORS_DARK);
      
      expect(lightKeys).toEqual(darkKeys);
    });
  });
});
