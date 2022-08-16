import { Avatar, Button, Input, TextField } from '@mui/material'
import React from 'react';
import "./TweetBox.css";


function TweetBox() {
  return (
    <div className='tweetBox'>
      <form>
        <div className='tweetBox--input'>
          <Avatar />
          <input placeholder='いまどうしてる？' type="text" />
        </div>
        <input placeholder='画像URLを入力してください' className='tweetBox--imageInput' type="text" />
        <Button className='tweetBox--tweetButton' type='submit'>ツイートする</Button>
      </form>
    </div>
  )
}

export default TweetBox
