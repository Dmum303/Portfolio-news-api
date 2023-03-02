import React from 'react';
import ArticleCard from '../../components/articleCard/articleCard';
import { Spotlight } from '../../components/spotlight';
import { StyledContainer } from './homePage.styles';

function HomePage(props) {
  if (!Array.isArray(props.apiData) || props.apiData.length === 0) {
    // return null or some loading indicator
    return null;
  }

  return (
    <StyledContainer>
      <div className="content">
        <Spotlight />

        <div className="news-container">
          <div className="articles-section">
            <ArticleCard apiData={props.apiData[0]} />
            <ArticleCard apiData={props.apiData[1]} />
          </div>
        </div>
      </div>
    </StyledContainer>
  );
}

export default HomePage;
