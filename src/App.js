// DO NOT DELETE

import React, {useState, useEffect} from 'react';
import * as react from 'react'
import './App.css'

/**
 * 
 * @type {React.FC}
 */
export const App = () => {
  const [dogUrl, setDogUrl] = useState('https://images.dog.ceo/breeds/schnauzer-miniature/n02097047_3534.jpg');

  const ImageUpdata = () => {
  fetch('https://dog.ceo/api/breeds/image/random')
    .then(res => res.json())
    .then(result => {
      const dog = result.message
      setDogUrl(dog)
    })
    .catch(error => {console.log(error)})
  }
  return (
  <>
    <header>
      <h1>Dog Photo</h1>
    </header>
    <main>
      <div className="description">
        <p>犬の画像を表示するサイトです。</p>
      </div>
    <div className="image">
    <img src={dogUrl} />
    {/* <button onClick={() => setDogUrl("https://images.dog.ceo/breeds/corgi-cardigan/n02113186_11073.jpg")}>更新</button> */}
    <button onClick={ImageUpdata}>更新</button>
    </div>
    </main>
  </>
  )
}
// https://dog.ceo/api/breeds/image/random
// {"message":"https://images.dog.ceo/breeds/mastiff-tibetan/n02108551_2861.jpg","status":"success"}