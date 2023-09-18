import { Sprite, Stage } from '@pixi/react';
import { useGame } from '@gamedev-test-task-15-09-2023/game-store';
import { Target } from '../target/target';
import { Board } from '../board/board';

const BOARD_WIDTH = 62 * 9;
const BOARD_HEIGHT = 62 * 8;

export function Game() {
  const game = useGame();

  return (
    <Stage
      width={BOARD_WIDTH}
      height={BOARD_HEIGHT}
      options={{ backgroundAlpha: 0 }}
    >
      <Sprite
        image="/assets/board.png"
        width={BOARD_WIDTH}
        height={BOARD_HEIGHT}
      />
      <Board board={game.board} />
      <Target {...game.target} />
    </Stage>
  );
}
