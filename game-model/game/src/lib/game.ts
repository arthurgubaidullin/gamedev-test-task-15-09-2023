import * as O from 'fp-ts/Option';
import { pipe } from 'fp-ts/function';
import * as Board from '@gamedev-test-task-15-09-2023/board';
import * as Direction from '@gamedev-test-task-15-09-2023/direction';
import * as Target from '@gamedev-test-task-15-09-2023/user-target';
import * as Options from '@gamedev-test-task-15-09-2023/options';

export interface Game {
  readonly board: Board.Board;
  readonly target: Target.Target;
}

export const create = (options: Options.Options): Game => {
  return {
    board: Board.create(options),
    target: Target.create(options),
  };
};

export const hit = (game: Game): O.Option<Game> =>
  pipe(
    game.board,
    Board.hit(game.target),
    O.map((board) => ({ ...game, board }))
  );

export const move =
  (direction: Direction.Direction) =>
  (game: Game): O.Option<Game> => {
    return pipe(
      game.target,
      Target.move(direction),
      O.map((target) => ({ ...game, target }))
    );
  };
