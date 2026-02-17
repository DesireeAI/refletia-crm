/**
 * Refletia Brand Colors - Dark Theme
 *
 * Paleta de cores Refletia para modo escuro
 * Mantendo compatibilidade com o sistema de temas existente
 */

export const REFLETIA_COLORS_DARK = {
  // Primary Colors - Core Refletia Brand (Dark Variants)
  primary: {
    blueDark: '#7c2b8f',      // Azul Escuro - Principal (mais claro para dark mode)
    roseVibrant: '#f0c088',   // Rosa Vibrante - Secundário (mais claro)
    goldenYellow: '#f0d866',  // Amarelo Dourado - Destaque (mais luminoso)
    warmBeige: '#e8c4a3',     // Beige Quente - Suporte (mais suave)
    deepPurple: '#7a2b7e',    // Roxo Profundo - Acento (mais claro)
  },

  // Secondary Colors - Extended Palette (Dark Variants)
  secondary: {
    terracotta: '#c8957e',    // Terracota (mais claro)
    warmBrown: '#b5836a',     // Marrom Quente (mais suave)
    deepMagenta: '#8d5670',   // Magenta Profundo (mais luminoso)
    dustyRose: '#b885a2',     // Rosa Poente (mais suave)
    wineRed: '#9b6178',       // Vinho Tinto (mais claro)
    purpleViolet: '#b840f0',   // Violeta Púrpura (mais luminoso)
    deepWine: '#9a6472',      // Vinho Profundo (mais suave)
    sandyBrown: '#b88977',    // Marrom Arenoso (mais claro)
    lightGold: '#e3c27e',     // Dourado Claro (mais luminoso)
    softYellow: '#f8f0b3',    // Amarelo Suave (mais brilhante)
    mediumPurple: '#b347b3',   // Púrpura Médio (mais claro)
    earthBrown: '#b3786a',    // Marrom Terra (mais suave)
  },

  // Semantic Colors - Functional Usage (Dark Optimized)
  semantic: {
    success: '#34d399',       // Verde Sucesso (mais luminoso)
    warning: '#fbbf24',       // Laranja Aviso (mais brilhante)
    error: '#f87171',         // Vermelho Erro (mais suave)
    info: '#60a5fa',          // Azul Informação (mais claro)
  },

  // Neutral Colors - Supporting Grays (Dark Theme)
  neutral: {
    white: '#ffffff',
    gray50: '#1f2937',
    gray100: '#374151',
    gray200: '#4b5563',
    gray300: '#6b7280',
    gray400: '#9ca3af',
    gray500: '#d1d5db',
    gray600: '#e5e7eb',
    gray700: '#f3f4f6',
    gray800: '#f9fafb',
    gray900: '#ffffff',
  }
};

/**
 * Mapeamento para compatibilidade com sistema existente
 * Mantém nomes semânticos para componentes existentes
 */
export const REFLETIA_COMPATIBILITY_DARK = {
  // Mapeamento de cores principais para nomes existentes
  red: REFLETIA_COLORS_DARK.semantic.error,
  orange: REFLETIA_COLORS_DARK.semantic.warning,
  yellow: REFLETIA_COLORS_DARK.primary.goldenYellow,
  green: REFLETIA_COLORS_DARK.semantic.success,
  blue: REFLETIA_COLORS_DARK.primary.blueDark,
  purple: REFLETIA_COLORS_DARK.primary.deepPurple,
  pink: REFLETIA_COLORS_DARK.primary.roseVibrant,

  // Cores terra para mapeamento adicional
  amber: REFLETIA_COLORS_DARK.primary.goldenYellow,
  lime: REFLETIA_COLORS_DARK.semantic.success,
  teal: REFLETIA_COLORS_DARK.primary.blueDark,
  cyan: REFLETIA_COLORS_DARK.primary.blueDark,

  // Neutros mantidos
  gray: REFLETIA_COLORS_DARK.neutral.gray500,
  bronze: REFLETIA_COLORS_DARK.secondary.terracotta,
  gold: REFLETIA_COLORS_DARK.primary.goldenYellow,
  brown: REFLETIA_COLORS_DARK.secondary.warmBrown,

  // Adicionando cores específicas para compatibilidade total
  ruby: REFLETIA_COLORS_DARK.primary.deepPurple,
  crimson: REFLETIA_COLORS_DARK.secondary.wineRed,
  tomato: REFLETIA_COLORS_DARK.semantic.error,
  grass: REFLETIA_COLORS_DARK.semantic.success,
  jade: REFLETIA_COLORS_DARK.primary.blueDark,
  mint: REFLETIA_COLORS_DARK.semantic.success,
  turquoise: REFLETIA_COLORS_DARK.primary.blueDark,
  sky: REFLETIA_COLORS_DARK.primary.blueDark,
  iris: REFLETIA_COLORS_DARK.primary.deepPurple,
  violet: REFLETIA_COLORS_DARK.primary.deepPurple,
  plum: REFLETIA_COLORS_DARK.secondary.dustyRose,
};
