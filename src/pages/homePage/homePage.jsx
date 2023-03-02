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
            {props.apiData.map(({ fields, sectionName, webTitle, webUrl }) => (
              <ArticleCard
                img={fields.thumbnail}
                title={sectionName}
                description={webTitle}
                url={webUrl}
              />
            ))}
          </div>
          <div className="quick-infos-section">
            <div className="quick-card">
              <div className="title">Title</div>
              <div className="description">Description</div>
            </div>
          </div>
        </div>
      </div>
    </StyledContainer>
  );
}

export default HomePage;
