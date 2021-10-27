// DO NOT DELETE

import React, { useState, useEffect } from 'react'
import { BreedsSelect } from './BreedsSelect'

export const DogListContainer = () => {
  const [breeds, setBreeds] = useState([])
  const [selectedBreed, setSelectedBreed] = useState(`https://dog.ceo/api/${breeds}/list/all`)

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
        values={breeds}
        value={selectedBreed}
        onchange={handleChange}
      />
    </>
  );
};