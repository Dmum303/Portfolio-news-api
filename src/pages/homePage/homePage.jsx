import React from 'react';
import ArticleCard from '../../components/articleCard/articleCard';
import { QuickInfoCard } from '../../components/quickInfoCard';
import { Spotlight } from '../../components/spotlight';
import { StyledContainer } from './homePage.styles';

function HomePage({ apiData, apiData2 }) {
  if (!Array.isArray(apiData) || apiData.length === 0) {
    // return null or some loading indicator
    return null;
  }

  const newApiData2 = Object.keys(apiData2)
    .slice(10, 25)
    .reduce((result, key) => {
      result.push(apiData2[key]);
      return result;
    }, []);

  return (
    <StyledContainer>
      <div className="content">
        <Spotlight />

        <div className="news-container">
          <div className="articles-section">
            {apiData.map(({ fields, sectionName, webTitle, webUrl, id }) => (
              <ArticleCard
                key={id}
                img={fields.thumbnail}
                title={sectionName}
                description={webTitle}
                url={webUrl}
              />
            ))}
          </div>
          <div className="quick-infos-section">
            {newApiData2.map(({ title, url }) => (
              <QuickInfoCard key={title} title={title} url={url} />
            ))}
          </div>
        </div>
      </div>
    </StyledContainer>
  );
}

export default HomePage;
