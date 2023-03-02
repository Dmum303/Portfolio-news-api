import React from 'react';
import { StyledContainer } from './articleCard.styles';

function ArticleCard(props) {
  if (!Array.isArray(props.apiData) || props.apiData.length === 0) {
    // return null or some loading indicator
    return null;
  }

  const article = props.apiData[0];

  return (
    <StyledContainer>
      <div className="article-card">
        <img src={article.fields.thumbnail} alt="" />
        <div className="title">{article.sectionName}</div>
        <div className="divider"></div>
        <div className="description">{article.webTitle}</div>
        <div className="data-section">
          <div className="like-icon">
            LIKE
            <span>165</span>
          </div>
          <div className="comments-icon">
            comments
            <span>165</span>
          </div>
          <div className="more-icon">
            <a href={article.webUrl}>more</a>
            <span>...-</span>
          </div>
        </div>
      </div>
    </StyledContainer>
  );
}

export default ArticleCard;
