import React from 'react';
import ArticleCard from '../../components/articleCard/articleCard';
import { Spotlight } from '../../components/spotlight';
import { StyledContainer } from './homePage.styles';

function HomePage(props) {
  return (
    <StyledContainer>
      <div className="content">
        <Spotlight />

        <div className="news-container">
          <div className="articles-section">
            <ArticleCard apiData={props.apiData} />
          </div>
        </div>
      </div>
    </StyledContainer>
  );
}

export default HomePage;
