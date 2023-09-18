import * as _Eq from 'fp-ts/Eq';

export type XYKey = `${string}-${string}`;

export const create = (data: Readonly<{ x: number; y: number }>): XYKey =>
  `${data.x.toString()}-${data.y.toString()}` as const;

export const parse = (key: XYKey): Readonly<{ x: number; y: number }> => {
  const [x, y] = key.split('-');
  return { x: parseInt(x), y: parseInt(y) };
};

export const Eq: _Eq.Eq<XYKey> = _Eq.eqStrict;
