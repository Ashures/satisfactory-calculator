export const toTitleCase = (str: string): string => {
  return toTitleCaseWord(str.split('-').reduce((acc, curr) => acc + toTitleCaseWord(curr))).trim();
};

const toTitleCaseWord = (str: string): string => {
  return ` ${str.charAt(0).toUpperCase()}${str.slice(1, str.length)}`;
};