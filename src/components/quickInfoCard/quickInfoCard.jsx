import React from 'react';
import { StyledContainer } from './quickInfoCard.styles';

function QuickInfoCard({ title, description, url }) {
  const firstTwoWords = title ? title.split(' ').slice(0, 3).join(' ') : '';
  // console.log(firstTwoWords);
  return (
    <StyledContainer>
      <div className="quick-card">
        <div className="title">{title}</div>

        <div className="description">{description}</div>
        <div className="link">
          <a href={url}>
            <span>more...</span>
          </a>
        </div>
        <div className="divider"></div>
      </div>
    </StyledContainer>
  );
}

export default QuickInfoCard;
