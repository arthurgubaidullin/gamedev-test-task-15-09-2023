import { AppProvider } from '@pixi/react';
import { Application } from 'pixi.js';
import { useMemo } from 'react';
import './app.module.css';
import { Game } from '../game/game';

export function App() {
  const app = useMemo(() => new Application(), []);

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <AppProvider value={app}>
        <Game />
      </AppProvider>
    </div>
  );
}

export default App;
