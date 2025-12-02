// LoadingSpinner.jsx
import './LoadingSpinner.css';

export default function LoadingSpinner() {
  return (
    <div className="loading-overlay">
      <div className="spinner-box"></div>
      <div className="loading-text"></div>
    </div>
  );
}