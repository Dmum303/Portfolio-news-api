import React from 'react';
import ArticleCard from '../../components/articleCard/articleCard';
import { Spotlight } from '../../components/spotlight';

function HomePage(props) {
  return (
    <div>
      <div className="content">
        <Spotlight />
      </div>
      <div className="news-container">
        <div className="articles-section">
          <ArticleCard apiData={props.apiData} />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
