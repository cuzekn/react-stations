// DO NOT DELETE

// export async function fetchImages(breed) {
//   const response = await fetch(
//     `https://dog.ceo/api/breed/${breed}/images/random/12`
//   );
//   const data = await response.json();
//   return data.message;
// }

import React, { useState, useEffect } from 'react'

export const DogListContainer = () => {
  const [breeds, setBreeds] = useState({})

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/list/all')
    .then(response => response.json())
    .then(result => (
      setBreeds(result.message)))
  },[]);
  return (
    <img src={breeds} />
  );
};