import { useStore } from '@nanostores/react';
import * as Game from '@gamedev-test-task-15-09-2023/game-model';
import { $game } from './game-store';

export const useGame = (): Game.Game => {
  return useStore($game);
};
