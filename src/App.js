// DO NOT DELETE

import React from 'react'
import { Header } from './Header'
import { Description } from './Description'
import { DogListContainer } from './DogListContainer'


/**
 *
 * @type {React.FC}
 */
export const App = () => {
  return(
    <>
      <Header />
      <Description />
      <br />
      <DogListContainer/>
    </>
  );
};