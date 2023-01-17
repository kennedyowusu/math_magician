import React from 'react';
import Calculator from '../components/Calculator';

const Calc = () => (
  <div className="calc-container">
    <div className="left-half">
      <div className="display">
        <div className="display-text">
          <p style={{ fontSize: '18px' }}>Let us do some maths!</p>
        </div>
      </div>
    </div>
    <div className="right-half">
      <div className="calc">
        <div className="calc-content">
          <Calculator />
        </div>
      </div>
    </div>
  </div>
);

export default Calc;
