import { ChatBubbleOutline, FavoriteBorder, PublishOutlined, Repeat, VerifiedUser } from '@mui/icons-material';
import { Avatar } from '@mui/material'
import React, { forwardRef } from 'react';
import "./TweetPost.css";

const TweetPost = forwardRef((props, ref) => {
  const { displayName, userName, verified, tweetText, avator, image } = props;
  return (
    <div className='tweetpost' ref={ref}>
      <div className='tweetpost--avator'>
        <Avatar src={avator} />
      </div>
      <div className='tweetpost--body'>
        <div className='tweetpost--header'>
          <div className='tweetpost--headerText'>
            <h3>
              {displayName}
              <span className='tweetpost--headerSpecial'>
                {verified && <VerifiedUser className='tweetpost--badge' />}
                @{userName}
              </span>
            </h3>
          </div>
          <div className='tweetpost--headerDescription'>
            <p>{tweetText}</p>
          </div>
        </div>
        <img src={image} />
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
);

export default TweetPost

