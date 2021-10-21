// DO NOT DELETE

import  React, { useState }  from 'react'
import { App } from './App'
import { DogImage } from './DogImage'
import './App.css'

export const Description = () => {
  // const { dogUrl, DogImage } = props;
  const [dogUrl, setDogUrl] = useState(
      'https://images.dog.ceo/breeds/schnauzer-miniature/n02097047_3534.jpg'
    )

    const updateImage = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json()) //json化
      .then(result => (
        setDogUrl(result.message) //jsonのmessageを表示
      ))
      //json形式に出来ない時
      .catch(error => {
        console.log('失敗', error)
      })
    }
  return(
    <main>
        <div className="top">
        <div className="description">
          <p>犬の画像を表示するサイトです。</p>
        </div>
          <div className="photo">
            <div className="image">
            <img src={dogUrl} alt={'犬の画像です'} />
            </div>
            <div className="btn">
            <button onClick={updateImage}>更新</button>
            </div>
          </div>
        </div>
      </main>
  );
};
