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

  if (!Array.isArray(apiData2) || apiData2.length === 0) {
    // return null or some loading indicator
    return null;
  }
  const newApiData = Object.keys(apiData)
    .slice(0, 4)
    .reduce((result, key) => {
      result.push(apiData[key]);
      return result;
    }, []);

  const newApiData2 = Object.keys(apiData)
    .slice(5, 10)
    .reduce((result, key) => {
      result.push(apiData[key]);
      return result;
    }, []);

  return (
    <StyledContainer>
      <div className="content">
        <Spotlight />

        <div className="news-container">
          <div className="articles-section">
            {newApiData.map(({ fields, sectionName, webTitle, webUrl, id }) => (
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
            {newApiData2.map(
              ({ fields, sectionName, webTitle, webUrl, id }) => (
                <QuickInfoCard
                  key={id}
                  img={fields.thumbnail}
                  title={sectionName}
                  description={webTitle}
                  url={webUrl}
                />
              )
            )}
          </div>
        </div>
      </div>
    </StyledContainer>
  );
}

export default HomePage;
