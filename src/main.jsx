// src/main.jsx
import { StrictMode, useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import LoadingSpinner from './components/LOADING/LoadingSpinner.jsx';
import './main.css';

function AppWithLoading() {
  const [isLoading, setIsLoading] = useState(true); // 控制加载状态

  useEffect(() => {
    let loadDone = false;
    let timerDone = false;

    const checkReady = () => {
      if (loadDone && timerDone) {
        setIsLoading(false); // 触发动画
      }
    };

    // 页面完全加载（含图片等）
    const handleLoad = () => {
      loadDone = true;
      checkReady();
    };

    if (document.readyState === 'complete') {
      loadDone = true;
      checkReady();
    } else {
      window.addEventListener('load', handleLoad);
    }

    // 至少 3 秒
    const timer = setTimeout(() => {
      timerDone = true;
      checkReady();
    }, 3000);

    return () => {
      window.removeEventListener('load', handleLoad);
      clearTimeout(timer);
    };
  }, []);

  return (
    <StrictMode>
      {/* 加载层：淡出 */}
      <div className={`loading-overlay ${isLoading ? 'visible' : 'hidden'}`} aria-hidden={!isLoading}>
        <LoadingSpinner />
      </div>

      {/* 主应用：淡入 */}
      <div className={`app-content ${!isLoading ? 'visible' : 'hidden'}`} aria-hidden={isLoading}>
        <App />
      </div>
    </StrictMode>
  );
}

createRoot(document.getElementById('root')).render(<AppWithLoading />);