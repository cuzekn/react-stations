// DO NOT DELETE
import React from 'react'

export const BreedsSelect = (props) => {
  const breeds = props.breeds;

  const listItems = breeds.map((breed) =>
  <option key={breed} value={breed} text={breed}>{breed}</option>
  )

  return (
    <>
    <select value={props.value} onChange={props.change}>
      {listItems}
    </select>
    </>
  );
};