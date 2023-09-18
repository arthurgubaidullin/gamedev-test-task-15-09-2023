import { useStore } from '@nanostores/react';
import * as Game from '@gamedev-test-task/game-model';
import { $game } from './game-store';

export const useGame = (): Game.Game => {
  return useStore($game);
};
