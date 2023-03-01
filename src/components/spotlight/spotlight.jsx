import React from 'react';
import { StyleContainer } from './spotlight.styles';
import { RiBankLine as Icon } from 'react-icons/ri';

function Spotlight(props) {
  return (
    <>
      <StyleContainer>
        <div className="spotlight-section">
          <div className="title">NEWS</div>
          <p className="description">The most important news today</p>
          <div className="dividers-container">
            <div className="divider"></div>
            <div className="icon-container">
              <Icon size={20} />
            </div>
            <div className="divider"></div>
          </div>
        </div>
      </StyleContainer>
    </>
  );
}

export default Spotlight;
