import React from 'react';
import { StyleContainer } from './spotlight.styles';

function Spotlight(props) {
  return (
    <>
      <StyleContainer>
        <div className="spotlight-section">
          <div className="title">NEWS</div>
          <p className="description">The most important news today</p>
          <div className="dividers-container">
            <div className="divider"></div>
            <div className="icon-container">ICON</div>
            <div className="divider"></div>
          </div>
        </div>
      </StyleContainer>
    </>
  );
}

export default Spotlight;
