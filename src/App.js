// DO NOT DELETE

import React, {useState, useEffect} from 'react';
import * as react from 'react'
import './App.css'

/**
 * 
 * @type {React.FC}
 */
export const App = () => {
  const [dogUrl, setDogUrl] = useState('https://images.dog.ceo/breeds/schnauzer-miniature/n02097047_3534.jpg',)

  const handleClick = () => {
  fetch('https://dog.ceo/api/breeds/image/random')
    .then(res => res.json())
    .then(result => {
      const dog = result.message
      setDogUrl(dog)
    })
    .catch(error => {console.log(error)})
  }
  return (
    <header>
      Dog Photo
      <p>犬の画像を表示するサイトです。</p>
      <img src={dogUrl} />
      {/* <button onClick={() => setDogUrl("https://images.dog.ceo/breeds/corgi-cardigan/n02113186_11073.jpg")}>更新</button> */}
      <button onClick={handleClick}>更新</button>
    </header>
  )
}

// https://dog.ceo/api/breeds/image/random
// {"message":"https://images.dog.ceo/breeds/mastiff-tibetan/n02108551_2861.jpg","status":"success"}