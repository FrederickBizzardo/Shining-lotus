import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { JSDOM } from 'jsdom';

// SHINING LIGHT

const response =  await fetch('http://calapi.inadiutorium.cz/api/v0/en/calendars/default/today')

const data = await response.json();
const day = data.celebrations;
// const date = data.celebrations[0];
const titles = day.map(celebration => celebration.title);

const index = day.title;
console.log(data);


 /*const searchQuery = titles.join(' ');
    const searchLink = `https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`;
  */


const searchQuery = titles.join(' ');
const searchLink = `https://www.google.com/search?tbm=isch&q=${encodeURIComponent(searchQuery)}`;


// DO NOT DELETE THIS CODE IT PARTLY WORKS

 const googleResponse = await fetch(searchLink);
 const googleHtml = await googleResponse.text();

 const dom = new JSDOM(googleHtml);
 const firstImage = dom.window.document.querySelector('img').getAttribute('src');

const imageElements = dom.window.document.querySelectorAll('a');
const urls = Array.from(imageElements).map(a => a.getAttribute('href'));

const image = (dom[0]);

//===============================



//const imageSearch = searchLink[0];


console.log('results', searchLink);

function Celebration() {



  //==========================

// Output the result to the page

// return <div>{JSON.stringify(data)}</div>;


//return <div>{JSON.stringify(day)}</div>;


//return <div>{JSON.stringify(titles)}</div>;




return (

  <div className="text-center">
    <h2 className="font-black font-sans font-mono text-2xl">Celebration Title</h2>
        <p className="italic">{titles.join(', ')}</p>
          <div>
        <p>Google Search Link: <a href={searchLink} target="_blank" rel="noopener noreferrer">{/*results*/}Link</a></p>
      </div>
      <div>
        <img src={searchLink} alt="First Image" />
          <p>{urls[0]}</p>
        <img src={searchQuery} alt="First Image" />
        {/*<p>{searchLink}</p>*/}
        <p>Google Search Link: <a href={searchLink} target="_blank" rel="noopener noreferrer">{/*results*/}new Link</a></p>
          <img src={urls[0]} alt="First Image" />
          <p>{googleHtml}</p>
      </div>
  </div>
  )
};

  export default Celebration;