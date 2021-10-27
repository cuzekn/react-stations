// DO NOT DELETE

import React, { useState, useEffect } from 'react'
import { BreedsSelect } from './BreedsSelect'

export const DogListContainer = () => {
  const [breeds, setBreeds] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState('');

  const handleChange = (e) => setSelectedBreed(e.target.value)

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/list/all')
    .then(response => response.json())
    .then(breeds => (
      setBreeds(Object.keys(breeds.message)))
    );
  },[]);

  return (
    <>
      <BreedsSelect
        breeds={breeds}
        breed={selectedBreed}
        change={handleChange}
      />
    </>
  );
};