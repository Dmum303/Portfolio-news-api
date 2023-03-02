import React from 'react';
import { StyledContainer } from './articleCard.styles';
import {
  AiOutlineLike as Like,
  AiOutlineMessage as Message,
  AiOutlineArrowRight as ArrowRight,
} from 'react-icons/ai';

function ArticleCard({ img, title, description, url }) {
  // const article = props.apiData;

  return (
    <StyledContainer>
      <div className="article-card">
        <img src={img} alt="" />
        <div className="title">{title}</div>
        <div className="divider"></div>
        <div className="description">{description}</div>
        <div className="data-section">
          <div className="like-icon vertical-centered">
            <Like size={16} />
            <span>165</span>
          </div>
          <div className="comments-icon vertical-centered">
            <Message size={16} />
            <span>125</span>
          </div>
          <div className="more-icon vertical-centered">
            <a href={url}>
              <span>more...</span>
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </StyledContainer>
  );
}

export default ArticleCard;
