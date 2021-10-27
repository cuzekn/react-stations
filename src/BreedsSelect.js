// DO NOT DELETE
import React from 'react'

export const BreedsSelect = (props) => {
  const values = props.values;

  const listItems = values.map((value) =>
  <option key={value} value={value} text={value}>{value}</option>
  )

  return (
    <>
    <select value={props.breeds} onChange={props.change}>
      {listItems}
    </select>
    </>
  );
};