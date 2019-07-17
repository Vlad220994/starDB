import React from 'react';

import './ErrorIndicator.css';

const ErrorIndicator = () => {
  return(
    <div className="ErrorIndicator">
      <span className="Boom">BOOM!</span>
      <span>something has gone terribly wrong</span>
      <span>(but we already sent droids to fix it)</span>
    </div>
  );
}

export default ErrorIndicator;
