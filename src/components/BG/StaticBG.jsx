// StaticBackground.jsx
import styles from './StaticBG.module.css';
import backgroundImage from '../../assets/img/0000.jpg'; 

const StaticBG = ({ children, className = '' }) => {
  const combinedClassName = `${styles.background} ${className}`.trim();

  return (
    <div
      className={combinedClassName}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {children}
    </div>
  );
};

export default StaticBG;