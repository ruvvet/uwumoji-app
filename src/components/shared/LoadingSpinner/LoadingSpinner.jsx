import React from 'react';
import './loadingspinner.css';

export default function LoadingSpinner() {
  return (
    <div className="spinner-container">
      <div className="spinner icon-loading-spinner" aria-hidden="true"></div>
    </div>
  );
}
