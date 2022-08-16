import { ChatBubbleOutline, FavoriteBorder, PublishOutlined, Repeat, VerifiedUser } from '@mui/icons-material';
import { Avatar } from '@mui/material'
import React from 'react';
import "./TweetPost.css";

export default function TweetPost() {
  return (
    <div className='tweetpost'>
      <div className='tweetpost--avator'>
        <Avatar />
      </div>
      <div className='tweetpost--body'>
        <div className='tweetpost--header'>
          <div className='tweetpost--headerText'>
            <h3>チュートリアル
              <span className='tweetpost--headerSpecial'>
                <VerifiedUser className='tweetpost--badge' />
                @kohaku_neko
              </span>
            </h3>
          </div>
          <div className='tweetpost--headerDescription'>
            <p>React now !!</p>
          </div>
        </div>
        <img src="https://source.unsplash.com/random" />
        <div className='tweetpost--footer'>
          <ChatBubbleOutline fontSize='small' />
          <Repeat fontSize='small' />
          <FavoriteBorder fontSize='small' />
          <PublishOutlined fontSize='small' />
        </div>
      </div>
    </div>
  )
}
