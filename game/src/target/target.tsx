import * as PixiGraphics from '@pixi/graphics';
import { Container, Graphics } from '@pixi/react';
import { useCallback } from 'react';

export function Target(data: { x: number; y: number }) {
  const draw = useCallback((g: PixiGraphics.Graphics) => {
    g.clear();
    g.lineStyle(2, 0, 1);
    g.beginFill(16711867, 0.25);
    g.drawRoundedRect(0, 0, 62, 62, 10);
    g.endFill();
  }, []);
  return (
    <Container x={data.x * 62} y={data.y * 62}>
      <Graphics draw={draw} />
    </Container>
  );
}
