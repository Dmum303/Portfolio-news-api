import React from 'react';
import { StyledContainer } from './quickInfoCard.styles';

function QuickInfoCard({ title, url }) {
  const firstTwoWords = title ? title.split(' ').slice(0, 3).join(' ') : '';
  // console.log(firstTwoWords);
  return (
    <StyledContainer>
      <div className="quick-card">
        <div className="title">{firstTwoWords}</div>
        <div className="description">{title}</div>
        <div className="link"></div>
        <a href={url}>
          <span>more...</span>
        </a>
      </div>
    </StyledContainer>
  );
}

export default QuickInfoCard;
