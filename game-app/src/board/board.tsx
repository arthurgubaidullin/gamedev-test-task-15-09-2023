import { Container } from '@pixi/react';
import * as _Board from '@gamedev-test-task-15-09-2023/board';
import { parse } from '@gamedev-test-task-15-09-2023/xy-key';
import { Item } from '../board-item/item';

export function Board(data: { board: _Board.Board }) {
  const items = Array.from(data.board.entries()).map(([key, item]) => {
    const { x, y } = parse(key);
    return (
      <Container key={key} x={x * 62} y={y * 62} width={62} height={62}>
        <Item item={item} />
      </Container>
    );
  });
  return <Container>{items}</Container>;
}
