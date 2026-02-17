/**
 * Refletia Brand Colors - Light Theme
 *
 * Paleta de cores Refletia para modo claro
 * Mantendo compatibilidade com o sistema de temas existente
 */

export const REFLETIA_COLORS_LIGHT = {
  // Primary Colors - Core Refletia Brand
  primary: {
    blueDark: '#521262',      // Azul Escuro - Principal
    roseVibrant: '#edb069',   // Rosa Vibrante - Secundário
    goldenYellow: '#e2ab2a',  // Amarelo Dourado - Destaque
    warmBeige: '#d9ae89',     // Beige Quente - Suporte
    deepPurple: '#541463',    // Roxo Profundo - Acento
  },

  // Secondary Colors - Extended Palette
  secondary: {
    terracotta: '#b17c69',    // Terracota
    warmBrown: '#9b694d',     // Marrom Quente
    deepMagenta: '#743e5a',   // Magenta Profundo
    dustyRose: '#a46c8c',     // Rosa Poente
    wineRed: '#844a63',       // Vinho Tinto
    purpleViolet: '#a020f0',   // Violeta Púrpura
    deepWine: '#804a58',      // Vinho Profundo
    sandyBrown: '#a67162',    // Marrom Arenoso
    lightGold: '#d2b069',     // Dourado Claro
    softYellow: '#f3ea99',    // Amarelo Suave
    mediumPurple: '#993399',   // Púrpura Médio
    earthBrown: '#986354',    // Marrom Terra
  },

  // Semantic Colors - Functional Usage
  semantic: {
    success: '#22c55e',       // Verde Sucesso
    warning: '#f59e0b',       // Laranja Aviso
    error: '#ef4444',         // Vermelho Erro
    info: '#3b82f6',          // Azul Informação
  },

  // Neutral Colors - Supporting Grays
  neutral: {
    white: '#ffffff',
    gray50: '#f9fafb',
    gray100: '#f3f4f6',
    gray200: '#e5e7eb',
    gray300: '#d1d5db',
    gray400: '#9ca3af',
    gray500: '#6b7280',
    gray600: '#4b5563',
    gray700: '#374151',
    gray800: '#1f2937',
    gray900: '#111827',
  }
};

/**
 * Mapeamento para compatibilidade com sistema existente
 * Mantém nomes semânticos para componentes existentes
 */
export const REFLETIA_COMPATIBILITY_LIGHT = {
  // Mapeamento de cores principais para nomes existentes
  red: REFLETIA_COLORS_LIGHT.semantic.error,
  orange: REFLETIA_COLORS_LIGHT.semantic.warning,
  yellow: REFLETIA_COLORS_LIGHT.primary.goldenYellow,
  green: REFLETIA_COLORS_LIGHT.semantic.success,
  blue: REFLETIA_COLORS_LIGHT.primary.blueDark,
  purple: REFLETIA_COLORS_LIGHT.primary.deepPurple,
  pink: REFLETIA_COLORS_LIGHT.primary.roseVibrant,

  // Cores terra para mapeamento adicional
  amber: REFLETIA_COLORS_LIGHT.primary.goldenYellow,
  lime: REFLETIA_COLORS_LIGHT.semantic.success,
  teal: REFLETIA_COLORS_LIGHT.primary.blueDark,
  cyan: REFLETIA_COLORS_LIGHT.primary.blueDark,

  // Neutros mantidos
  gray: REFLETIA_COLORS_LIGHT.neutral.gray500,
  bronze: REFLETIA_COLORS_LIGHT.secondary.terracotta,
  gold: REFLETIA_COLORS_LIGHT.primary.goldenYellow,
  brown: REFLETIA_COLORS_LIGHT.secondary.warmBrown,

  // Adicionando cores específicas para compatibilidade total
  ruby: REFLETIA_COLORS_LIGHT.primary.deepPurple,
  crimson: REFLETIA_COLORS_LIGHT.secondary.wineRed,
  tomato: REFLETIA_COLORS_LIGHT.semantic.error,
  grass: REFLETIA_COLORS_LIGHT.semantic.success,
  jade: REFLETIA_COLORS_LIGHT.primary.blueDark,
  mint: REFLETIA_COLORS_LIGHT.semantic.success,
  turquoise: REFLETIA_COLORS_LIGHT.primary.blueDark,
  sky: REFLETIA_COLORS_LIGHT.primary.blueDark,
  iris: REFLETIA_COLORS_LIGHT.primary.deepPurple,
  violet: REFLETIA_COLORS_LIGHT.primary.deepPurple,
  plum: REFLETIA_COLORS_LIGHT.secondary.dustyRose,
};
