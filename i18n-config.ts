export const i18n = {
  locales: ['ru', 'en'],
  defaultLocale: 'ru',
};

export type I18nConfig = typeof i18n;
export type Locale = I18nConfig['locales'][number];
