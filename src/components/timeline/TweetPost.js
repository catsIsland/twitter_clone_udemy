import { ChatBubbleOutline, FavoriteBorder, PublishOutlined, Repeat, VerifiedUser } from '@mui/icons-material';
import { Avatar } from '@mui/material'
import React, { forwardRef } from 'react';
import "./TweetPost.css";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { collection, deleteDoc, doc, getDocs, query, where } from 'firebase/firestore';
import db from "../../firebase";

const TweetPost = forwardRef((props, ref) => {
  const { displayName, userName, verified, tweetText, avator, image } = props;

  const deleteUser = async (string) => {
    const postData = collection(db, 'post');
    const q = query(postData, where('tweetText', '==', string));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach(async (document) => {
      const userDocumentRef = doc(db, 'post', document.id);
      await deleteDoc(userDocumentRef);
    });
  };

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
          <DeleteOutlineOutlinedIcon fontSize='small' className='deleteIcon' onClick={() => deleteUser(tweetText)} />
        </div>
      </div>
    </div>
  )
}
);

export default TweetPost

