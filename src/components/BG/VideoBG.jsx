// src/components/VideoBG.jsx
import bgVideo from '../../assets/BG-V-00.mp4';
import styles from './VideoBG.module.css'; // 引入 CSS 模块

export default function VideoBG({ children, className = '' }) {
  return (
    <>
      <div className={styles.videoBgContainer}>
        <video autoPlay muted loop playsInline className={styles.videoBg}>
          <source src={bgVideo} type="video/mp4" />
        </video>
      </div>
      <div className={`${styles.contentLayer} ${className}`}>
        {children}
      </div>
    </>
  );
}