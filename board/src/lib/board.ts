import { pipe } from 'fp-ts/function';
import * as Item from '@gamedev-test-task-15-09-2023/item';
import * as RM from 'fp-ts/ReadonlyMap';
import * as O from 'fp-ts/Option';
import * as XYKey from '@gamedev-test-task-15-09-2023/xy-key';
import * as Options from '@gamedev-test-task-15-09-2023/options';

export type Board = ReadonlyMap<XYKey.XYKey, Item.Item>;

export const create = (options: Options.Options): Board => {
  const board: Map<XYKey.XYKey, Item.Item> = new Map();
  for (let i = 0; i < options.rows; i++) {
    for (let j = 0; j < options.columns; j++) {
      const key = `${i.toString()}-${j.toString()}` as const;
      board.set(key, Item.create());
    }
  }
  return board;
};

export const hit =
  (data: { x: number; y: number }) =>
  (board: Board): O.Option<Board> =>
    pipe(
      board,
      RM.lookupWithKey(XYKey.Eq)(XYKey.create(data)),
      O.chain(([key, item]) =>
        pipe(
          Item.hit(item),
          O.map((item) => RM.upsertAt(XYKey.Eq)(key, item)(board))
        )
      )
    );
