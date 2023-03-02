import React, { useEffect, useState } from 'react';
import { NavBar } from '../components/navBar';
import { WebsiteLogo } from '../components/websiteLogo';
// import { Spotlight } from '../components/spotlight';
import { HomePage } from '../pages/homePage';

const Feed = ({ navigate }) => {
  const [api, setApi] = useState([]);
  const [api2, setApi2] = useState([]);
  //usestate always returns an array with 2 values
  // use the second to set the info in the first, to be used later

  const loadApi = async () => {
    try {
      const response = await fetch(
        'https://content.guardianapis.com/search?q=&query-fields=headline&show-fields=thumbnail,headline,byline&order-by=newest&api-key=33c178d6-be74-4321-93e7-ec61c0ac7723'
      );
      const data = await response.json();
      // console.log(data);
      // console.log(data.response.results);
      //This should set the key from api results to the api var
      setApi(data.response.results);
    } catch (error) {
      console.log('Error fetching API data: ', error);
    }
  };

  const loadApi2 = async () => {
    try {
      const response = await fetch(
        'https://newsapi.org/v2/everything?domains=wsj.com&apiKey=d937e914fcc04e84b650ce6ddcbfeaa5'
      );
      const data = await response.json();
      console.log(data);
      console.log(data.response.results);
      //This should set the key from api results to the api var
      setApi2(data.response.results);
    } catch (error) {
      console.log('Error fetching API data: ', error);
    }
  };

  // calls the loadApi, I think it auto reloads page if any changes but it is simple sofar
  // without the [] it constantly reloads the page
  useEffect(() => {
    loadApi();
    loadApi2();
  }, []);

  return (
    <>
      <div id="wrapper">
        <WebsiteLogo />
        <NavBar />
        <HomePage apiData={api} apiData2={api2} />
      </div>
    </>
  );
};

export default Feed;
