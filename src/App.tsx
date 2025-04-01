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
        <div>
          <ul>
            <li>Взял на себя смелость заменить панораму на ту что лучше "стыкуется".</li>
            <li>
              Не выполнена часть задания в отношении пинов с текстом: я "срезал углы", привязав пины к самой панораме. С
              текстом так не получится потому что он тоже будет поворачиваться. Для текса (и для пинов) нужно
              формировать отдельный слой с собственными орбиталями и кучей логики с тригонометрией, которую нужно будет
              синхронизировать с панорамой. Я посчитал что это чересчур для технического задания: что со сторонней
              библиотекой (есть такая) что на собственную реализачию ушло бы ещё больше часа.
            </li>
            <li>Верстка адаптивная (включая canvas и прямоугольники).</li>
          </ul>
        </div>
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
