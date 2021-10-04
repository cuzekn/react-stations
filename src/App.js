// DO NOT DELETE

import React, {useState} from 'react';
import * as react from 'react'
import './App.css'

/**
 * 
 * @type {React.FC}
 */
export const App = () => {
  const [dogUrl, setDogUrl] = useState("https://images.dog.ceo/breeds/schnauzer-miniature/n02097047_3534.jpg");
  return (
    <header>
      Dog Photo
      <p>犬の画像を表示するサイトです。</p>
      <img src={dogUrl} />
      <button onClick={() => setDogUrl("https://images.dog.ceo/breeds/corgi-cardigan/n02113186_11073.jpg")}>更新</button>
    </header>
  )
}