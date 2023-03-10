import React from 'react';
import { StyledContainer } from './quickInfoCard.styles';
import {
  AiOutlineLike as Like,
  AiOutlineMessage as Message,
  AiOutlineArrowRight as ArrowRight,
} from 'react-icons/ai';

function QuickInfoCard({ title, url }) {
  return (
    <StyledContainer>
      <div className="quick-card">
        <div className="title">{title}</div>
        <div className="description"></div>
        {/* <div className="link">{url}</div> */}
        <a href={url}>
          <span>more...</span>
          <ArrowRight size={16} />
        </a>
      </div>
    </StyledContainer>
  );
}

export default QuickInfoCard;
