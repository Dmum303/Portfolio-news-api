import React from 'react';
import { StyledContainer } from './articleCard.styles';

function ArticleCard(props) {
  return (
    <StyledContainer>
      <div className="article-card">
        <img src="" alt="" />
        <div className="title">Title</div>
        <div className="divider"></div>
        <div className="description">description</div>
        <div className="data-section"></div>
        <div className="like-icon">
          LIKE
          <span>165</span>
        </div>
        <div className="comments-icon">
          comments
          <span>165</span>
        </div>
        <div className="more-icon">
          more
          <span>...-</span>
        </div>
      </div>
    </StyledContainer>
  );
}

export default ArticleCard;
