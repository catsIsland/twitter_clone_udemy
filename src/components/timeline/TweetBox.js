import { Avatar, Button, Input, TextField } from '@mui/material'
import React, { memo, useState } from 'react';
import "./TweetBox.css";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import db from '../../firebase';


const TweetBox = React.memo(() => {

  const [tweetMessage, setTweetMessage] = useState('');
  const [tweetImage, setTweetImage] = useState('');

  const onChangeInput = (e) => {
    setTweetMessage(e.target.value);
  }

  const onChangeImage = (e) => {
    setTweetImage(e.target.value);
  }

  const onClickSendTweet = (e) => {
    e.preventDefault();
    addDoc(collection(db, "post"), {
      displayName: "チュートリアル",
      userName: "kohaku_neko",
      verified: true,
      tweetText: tweetMessage,
      avator: "https://westcoast-jp.com/favicon.ico",
      image: tweetImage,
      timestamp: serverTimestamp()
    });

    setTweetImage("");
    setTweetMessage("");
  }

  return (
    <div className='tweetBox'>
      <form>
        <div className='tweetBox--input'>
          <Avatar />
          <input value={tweetMessage} placeholder='いまどうしてる？' type="text" onChange={onChangeInput} />
        </div>
        <input value={tweetImage} onChange={onChangeImage} placeholder='画像URLを入力してください' className='tweetBox--imageInput' type="text" />
        <Button onClick={onClickSendTweet} className='tweetBox--tweetButton' type='submit'>ツイートする</Button>
      </form>
    </div >
  )
})

export default TweetBox;
