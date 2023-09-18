import { Sprite } from '@pixi/react';
import * as _Item from '@gamedev-test-task-15-09-2023/item';

export function Item(data: { item: _Item.Item }) {
  if (data.item.state === 'destroyed') {
    return null;
  }
  return (
    <Sprite
      image="/assets/crystal_yellow.png"
      width={52}
      height={52}
      x={5}
      y={2}
    />
  );
}
