import React from 'react';
import ArticleCard from '../../components/articleCard/articleCard';
import { QuickInfoCard } from '../../components/quickInfoCard';
import { Spotlight } from '../../components/spotlight';
import { StyledContainer } from './homePage.styles';

function HomePage(props) {
  if (!Array.isArray(props.apiData) || props.apiData.length === 0) {
    // return null or some loading indicator
    return null;
  }

  console.log('Im here');
  console.log(props.apiData2.articles);

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
            <QuickInfoCard />
          </div>
        </div>
      </div>
    </StyledContainer>
  );
}

export default HomePage;
