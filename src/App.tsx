import { useRef, useEffect, useMemo } from 'react';
import { panorama } from './panorama/panorama';
import { Palette } from './palette/palette';

import styles from './app.module.css';

const avatarSrc = '/avatar_hex.png';

function App() {
  const ref = useRef<HTMLDivElement>(null);

  const { canvas, smoothReturn } = useMemo(() => {
    return panorama();
  }, []);

  const handlePaletteClick = () => {
    smoothReturn();
  };

  useEffect(() => {
    if (ref.current && !ref.current.contains(canvas)) {
      ref.current?.appendChild(canvas);
    }
  }, [canvas]);

  return (
    <>
      <header className={styles.header}>
        <h1>Montreal city panorama</h1>
      </header>
      <div className={styles.container}>
        <div ref={ref} />
        <Palette onClick={handlePaletteClick} />
      </div>
      <footer className={styles.footer}>
        <div className={styles.footer__author}>
          <span>© 2025 </span>
          <img height={24} src={avatarSrc} alt="avatar" />
          <a href="https://github.com/mrHoft">
            <span> mrHoft</span>
          </a>
        </div>
      </footer>
    </>
  );
}

export default App;
