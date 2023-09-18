import { atom, onMount } from 'nanostores';
import * as Game from '@gamedev-test-task/game-model';
import * as Options from '@gamedev-test-task/game-options';
import * as O from 'fp-ts/Option';
import { constVoid, pipe } from 'fp-ts/function';
import * as Direction from '@gamedev-test-task/direction';
import { keyOrCodeToDirection } from './key-or-code-to-direction';
import { isEnterKeyDown } from './enter';

const DEFAULT_OPTIONS: Options.Options = Options.create(9, 8);

export const $game = atom<Game.Game>(Game.create(DEFAULT_OPTIONS));

onMount($game, () => {
  window.addEventListener('keydown', onKeyDown, true);
  return () => {
    window.removeEventListener('keydown', onKeyDown);
  };
});

export const move = (direction: Direction.Direction): void => {
  return pipe(
    $game.get(),
    Game.move(direction),
    O.fold(constVoid, (state) => {
      $game.set(state);
    })
  );
};

export const hit = (): void => {
  pipe(
    $game.get(),
    Game.hit,
    O.fold(constVoid, (state) => {
      $game.set(state);
    })
  );
};

const onKeyDown = (event: KeyboardEvent): void => {
  if (event.defaultPrevented) {
    return;
  }

  let handled = false;

  pipe(
    keyOrCodeToDirection(event),
    O.fold(constVoid, move),
    () => (handled = true)
  );

  pipe(
    event,
    O.fromPredicate(isEnterKeyDown),
    O.fold(constVoid, hit),
    () => (handled = true)
  );

  if (handled) {
    event.preventDefault();
  }
};
