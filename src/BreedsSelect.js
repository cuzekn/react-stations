// DO NOT DELETE
import React from 'react'

export const BreedsSelect = (props) => {
  const breeds = props.breeds;

  const listItems = breeds.map((value) =>
  <option key={value} value={value} text={value}>{value}</option>
  )

  return (
    <>
    <select breeds={props.breeds} onChange={props.change}>
      {listItems}
    </select>
    </>
  );
};