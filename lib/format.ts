export const toTitleCase = (value: string) =>
  value
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');

export const toSlug = (value: string) => value.toLowerCase().replace(/\s+/g, '-');
