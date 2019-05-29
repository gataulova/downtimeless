enum Theme {
  dark,
  light
}

export let theme: Theme = Theme.dark;

export const isDark = () => theme === Theme.dark;

export const isLight = () => theme === Theme.light;
