import * as PixiGraphics from '@pixi/graphics';
import { Container, Graphics } from '@pixi/react';
import { useCallback } from 'react';
import { CELL_SIZE } from '../game/constants';

export function Target(data: { x: number; y: number }) {
  const draw = useCallback((g: PixiGraphics.Graphics) => {
    g.clear();
    g.lineStyle(2, 0, 1);
    g.beginFill(16711867, 0.25);
    g.drawRoundedRect(0, 0, CELL_SIZE, CELL_SIZE, 10);
    g.endFill();
  }, []);
  return (
    <Container x={data.x * CELL_SIZE} y={data.y * CELL_SIZE}>
      <Graphics draw={draw} />
    </Container>
  );
}
