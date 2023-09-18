import { Sprite } from '@pixi/react';
import * as _Item from '@gamedev-test-task/board-item';
import { CELL_SIZE } from '../game/constants';

const PADDING = 10;
const ITEM_SIZE = CELL_SIZE - 10;

export function Item(data: { item: _Item.Item }) {
  if (data.item.state === 'destroyed') {
    return null;
  }
  return (
    <Sprite
      image="/assets/crystal_yellow.png"
      width={ITEM_SIZE}
      height={ITEM_SIZE}
      x={PADDING / 2}
      y={PADDING / 5}
    />
  );
}
