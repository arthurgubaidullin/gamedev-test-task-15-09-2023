import * as O from 'fp-ts/Option';

export type Item = Readonly<{
  state: 'idle' | 'destroyed';
}>;

export const create = (): Item => {
  return { state: 'idle' };
};

export const hit = (item: Item): O.Option<Item> => {
  if (item.state === 'idle') {
    return O.some({
      state: 'destroyed',
    });
  }
  return O.none;
};
