import * as O from 'fp-ts/Option';
import * as Direction from '@gamedev-test-task/direction';

const LEFT_ARROW = { key: 'ArrowLeft', code: 37 } as const;
const UP_ARROW = { key: 'ArrowUp', code: 38 } as const;
const RIGHT_ARROW = { key: 'ArrowRight', code: 39 } as const;
const DOWN_ARROW = { key: 'ArrowDown', code: 40 } as const;

export const keyOrCodeToDirection = (
  keyCode_: { key: string } | { keyCode: number }
): O.Option<Direction.Direction> => {
  let direction: O.Option<Direction.Direction> = O.none;
  const keyCode = 'key' in keyCode_ ? keyCode_.key : keyCode_.keyCode;
  switch (keyCode) {
    case LEFT_ARROW.code:
    case LEFT_ARROW.key:
      direction = O.some(Direction.LEFT);
      break;
    case RIGHT_ARROW.code:
    case RIGHT_ARROW.key:
      direction = O.some(Direction.RIGHT);
      break;
    case UP_ARROW.code:
    case UP_ARROW.key:
      direction = O.some(Direction.UP);
      break;
    case DOWN_ARROW.code:
    case DOWN_ARROW.key:
      direction = O.some(Direction.DOWN);
      break;
    default:
      break;
  }
  return direction;
};
