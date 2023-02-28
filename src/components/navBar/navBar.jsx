import React from 'react';
import { StyledContainer } from './navBar.styles';

function NavBar(props) {
  return (
    <div>
      <StyledContainer>
        <div className="nav-items">
          <span>
            <a href="/feed">Home</a>
          </span>
          <span>
            <a href="/feed">Politics</a>
          </span>
          <span>
            <a href="/feed">Sport</a>
          </span>
          <span>
            <a href="/feed">Tech</a>
          </span>
          <span>
            <a href="/feed">UK</a>
          </span>
          <span>
            <a href="/feed">Global</a>
          </span>
        </div>
      </StyledContainer>
    </div>
  );
}

export default NavBar;
