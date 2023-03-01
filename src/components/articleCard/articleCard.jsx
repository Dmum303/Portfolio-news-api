import React from 'react';
import { StyledContainer } from './articleCard.styles';

function ArticleCard(props) {
  return (
    <StyledContainer>
      <div className="article-card">
        <img src={props.apiData[0].fields.thumbnail} alt="" />
        <div className="title">{props.apiData[0].sectionName}</div>
        <div className="divider"></div>
        <div className="description">{props.apiData[0].webTitle}</div>
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
          <a href={props.apiData[0].webUrl}>more</a>
          <span>...-</span>
        </div>
      </div>
    </StyledContainer>
  );
}

export default ArticleCard;
