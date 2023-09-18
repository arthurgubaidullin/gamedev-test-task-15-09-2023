import { Container } from '@pixi/react';
import * as _Board from '@gamedev-test-task/board';
import { parse } from '@gamedev-test-task/xy-key';
import { Item } from '../board-item/item';
import { CELL_SIZE } from '../game/constants';

export function Board(data: { board: _Board.Board }) {
  const items = Array.from(data.board.entries()).map(([key, item]) => {
    const { x, y } = parse(key);
    return (
      <Container
        key={key}
        x={x * CELL_SIZE}
        y={y * CELL_SIZE}
        width={CELL_SIZE}
        height={CELL_SIZE}
      >
        <Item item={item} />
      </Container>
    );
  });
  return <Container>{items}</Container>;
}
