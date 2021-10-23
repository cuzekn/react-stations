// DO NOT DELETE

import React from 'react'
import { Header } from './Header'
import { Description } from './Description'
import { useEffect, useState } from 'react'
import { DogListContainer } from './DogListContainer'


/**
 *
 * @type {React.FC}
 */
export const App = () => {
  // const [urls, setUrls] = useState(null);
  // useEffect(() => {
  //   fetchImages("shiba").then((urls) => {
  //     setUrls(urls);
  //   });
  // }, []);
  return(
    <>
      <Header />
      <Description />
      <br />
      <DogListContainer  />
    </>
  );
};