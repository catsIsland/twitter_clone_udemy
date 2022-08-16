import React from 'react';
import './Timeline.css';
import TweetBox from './TweetBox';
import TweetPost from './TweetPost';

function Timeline() {
  return (
    <div className='timeline'>
      {/* header */}
      <div className='timeline--header'>
        <h2>ホーム</h2>
      </div>

      {/* twitter ボックス */}
      <TweetBox />

      {/* postした情報  */}
      <TweetPost />


    </div>
  )
}
;
export default Timeline
