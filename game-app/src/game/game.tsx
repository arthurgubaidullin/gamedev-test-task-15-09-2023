import { Sprite, Stage } from '@pixi/react';
import { useGame } from '@gamedev-test-task/game-store';
import { Target } from '../target/target';
import { Board } from '../board/board';
import { BOARD_WIDTH, BOARD_HEIGHT } from './constants';

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
