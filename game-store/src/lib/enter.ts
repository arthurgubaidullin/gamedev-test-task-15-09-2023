const ENTER = { key: 'Enter', code: 13 } as const;

export const isEnterKeyDown = (
  a: { key: string } | { keyCode: number }
): boolean => {
  return 'key' in a ? a.key === ENTER.key : a.keyCode === ENTER.code;
};
