import * as O from 'fp-ts/Option';
import * as Direction from '@gamedev-test-task/direction';
import { absurd } from 'fp-ts/function';
import { Options } from '@gamedev-test-task/game-options';

export interface Target {
  readonly x: number;
  readonly y: number;
  readonly options: Options;
}

export const create = (options: Options): Target => {
  return {
    x: 0,
    y: 0,
    options: options,
  };
};

const isXValid = (x: number) => (target: Target) =>
  0 <= x && x < target.options.rows;

const isYValid = (y: number) => (target: Target) =>
  0 <= y && y < target.options.columns;

const right = (target: Target): Target => {
  const nextValue = target.x + 1;
  return { ...target, x: isXValid(nextValue)(target) ? nextValue : 0 };
};

const left = (target: Target): Target => {
  const nextValue = target.x - 1;
  return {
    ...target,
    x: isXValid(nextValue)(target) ? nextValue : target.options.rows - 1,
  };
};

const up = (target: Target): Target => {
  const nextValue = target.y + 1;
  return { ...target, y: isYValid(nextValue)(target) ? nextValue : 0 };
};

const down = (target: Target): Target => {
  const nextValue = target.y - 1;
  return {
    ...target,
    y: isYValid(nextValue)(target) ? nextValue : target.options.columns - 1,
  };
};

export const move =
  (direction: Direction.Direction) =>
  (target: Target): O.Option<Target> => {
    let _target: Target;
    switch (direction) {
      case Direction.RIGHT:
        _target = right(target);
        break;
      case Direction.LEFT:
        _target = left(target);
        break;
      case Direction.DOWN:
        _target = up(target);
        break;
      case Direction.UP:
        _target = down(target);
        break;

      default:
        absurd(direction);
        throw new TypeError();
    }
    return O.some(_target);
  };
