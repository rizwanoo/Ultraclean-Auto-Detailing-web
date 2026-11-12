export type SectionThemeKey =
  | 'ice-blue'
  | 'soft-mint'
  | 'electric-blue'
  | 'vibrant-aqua'
  | 'warm-white';

export interface SectionTheme {
  key: SectionThemeKey;
  bgClass: string;
  textClass: string;
  headingClass: string;
  subtextClass: string;
  accentClass: string;
  dividerClass: string;
  ctaClass: string;
  secondaryCtaClass: string;
  badgeBgClass: string;
  badgeTextClass: string;
  isDark: boolean;
}

export const SECTION_THEMES: Record<SectionThemeKey, SectionTheme> = {
  'ice-blue': {
    key: 'ice-blue',
    bgClass: 'bg-[#DCEEFF]',
    textClass: 'text-[#27313B]',
    headingClass: 'text-[#27313B]',
    subtextClass: 'text-[#27313B]/80',
    accentClass: 'text-[#075BFF]',
    dividerClass: 'border-[#27313B]/15',
    ctaClass: 'text-[#075BFF] hover:text-[#00C7C7]',
    secondaryCtaClass: 'text-[#27313B] hover:text-[#075BFF]',
    badgeBgClass: 'bg-[#075BFF]',
    badgeTextClass: 'text-white',
    isDark: false
  },
  'soft-mint': {
    key: 'soft-mint',
    bgClass: 'bg-[#E5F6EF]',
    textClass: 'text-[#27313B]',
    headingClass: 'text-[#27313B]',
    subtextClass: 'text-[#27313B]/80',
    accentClass: 'text-[#00C7C7]',
    dividerClass: 'border-[#27313B]/15',
    ctaClass: 'text-[#075BFF] hover:text-[#00C7C7]',
    secondaryCtaClass: 'text-[#27313B] hover:text-[#075BFF]',
    badgeBgClass: 'bg-[#00C7C7]',
    badgeTextClass: 'text-[#27313B]',
    isDark: false
  },
  'electric-blue': {
    key: 'electric-blue',
    bgClass: 'bg-[#075BFF]',
    textClass: 'text-white',
    headingClass: 'text-white',
    subtextClass: 'text-white/85',
    accentClass: 'text-[#D7F34A]',
    dividerClass: 'border-white/20',
    ctaClass: 'text-[#D7F34A] hover:text-white',
    secondaryCtaClass: 'text-white hover:text-[#D7F34A]',
    badgeBgClass: 'bg-white',
    badgeTextClass: 'text-[#075BFF]',
    isDark: true
  },
  'vibrant-aqua': {
    key: 'vibrant-aqua',
    bgClass: 'bg-[#00C7C7]',
    textClass: 'text-[#27313B]',
    headingClass: 'text-[#27313B]',
    subtextClass: 'text-[#27313B]/85',
    accentClass: 'text-white',
    dividerClass: 'border-[#27313B]/15',
    ctaClass: 'text-[#27313B] hover:text-white',
    secondaryCtaClass: 'text-white hover:text-[#27313B]',
    badgeBgClass: 'bg-[#075BFF]',
    badgeTextClass: 'text-white',
    isDark: false
  },
  'warm-white': {
    key: 'warm-white',
    bgClass: 'bg-[#FFFDF7]',
    textClass: 'text-[#27313B]',
    headingClass: 'text-[#27313B]',
    subtextClass: 'text-[#27313B]/75',
    accentClass: 'text-[#075BFF]',
    dividerClass: 'border-[#27313B]/10',
    ctaClass: 'text-[#075BFF] hover:text-[#00C7C7]',
    secondaryCtaClass: 'text-[#27313B] hover:text-[#075BFF]',
    badgeBgClass: 'bg-[#075BFF]',
    badgeTextClass: 'text-white',
    isDark: false
  }
};

/**
 * Dynamically resolves a section theme from a key or sequence index
 */
export function getSectionTheme(key: SectionThemeKey): SectionTheme {
  return SECTION_THEMES[key] || SECTION_THEMES['warm-white'];
}

/**
 * Returns a dynamically alternating theme from a curated sequence of Ice Blue, Soft Mint, Electric Blue, etc.
 */
export function getAlternatingTheme(
  index: number,
  sequence: SectionThemeKey[] = ['ice-blue', 'soft-mint', 'electric-blue', 'warm-white', 'vibrant-aqua']
): SectionTheme {
  const selectedKey = sequence[index % sequence.length];
  return getSectionTheme(selectedKey);
}
