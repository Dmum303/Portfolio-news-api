import React, { useEffect, useState } from 'react';
import { NavBar } from '../components/navBar';
import { WebsiteLogo } from '../components/websiteLogo';
// import { Spotlight } from '../components/spotlight';
import { HomePage } from '../pages/homePage';

const Feed = ({ navigate }) => {
  const [api, setApi] = useState([]);
  //usestate always returns an array with 2 values
  // use the second to set the info in the first, to be used later

  const loadApi = () => {
    fetch(
      'https://content.guardianapis.com/search?q=&query-fields=headline&show-fields=thumbnail,headline,byline&order-by=newest&api-key=33c178d6-be74-4321-93e7-ec61c0ac7723'
    )
      //'https://www.boredapi.com/api/activity')
      .then((response) => response.json())
      .then(async (data) => {
        console.log(data);
        console.log(data.response.results);
        //This should set the key from api results to the api var
        setApi(data.response.results);
        // console.log(api);
      });
  };

  // calls the loadApi, I think it auto reloads page if any changes but it is simple sofar
  // without the [] it constantly reloads the page
  useEffect(() => {
    loadApi();
  }, []);

  return (
    <>
      <div id="wrapper">
        <WebsiteLogo />
        <NavBar />
        <HomePage apiData={api} />
        {/* <ul>
          {api.map((story) => (
            <div key={story.id}>
              <h2>{story.sectionName}</h2>
              <br></br>
              <p>{story.webTitle}</p>

              <br></br>
              <img
                src={story.fields.thumbnail}
                alt={story.fields.headline}
              ></img>
              <br></br>
              <a href={story.webUrl}>{story.sectionName}</a>
            </div>
          ))}
        </ul> */}
      </div>
    </>
  );
};

export default Feed;
