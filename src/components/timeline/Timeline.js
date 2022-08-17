import React, { useEffect, useState } from 'react';
import './Timeline.css';
import TweetBox from './TweetBox';
import TweetPost from './TweetPost';
import db from "../../firebase";
import { collection, getDocs, onSnapshot, orderBy, query } from "firebase/firestore";
import FlipMove from 'react-flip-move';


function Timeline() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const postData = collection(db, "post");
    const q = query(postData, orderBy("timestamp", "desc"));
    // 非リアル
    // getDocs(q).then((querySnapshot) => {
    //   setPosts(querySnapshot.docs.map((doc) => doc.data()))
    // })

    //onSnapshot >> リアルタイム取得
    onSnapshot(q, (querySnapShot) => {
      setPosts(querySnapShot.docs.map((doc) => doc.data()))
    });

  }, []);

  return (

    <div className='timeline'>

      {/* header */}
      <div className='timeline--header'>
        <h2>ホーム</h2>
      </div>

      {/* twitter ボックス */}
      <TweetBox />

      {/* postした情報  */}
      <FlipMove>
        {posts.map((post) => (
          <TweetPost
            key={post.tweetText}
            displayName={post.displayName}
            userName={post.userName}
            verified={post.verified}
            tweetText={post.tweetText}
            avator={post.avator}
            image={post.image}
          />
        ))}
      </FlipMove>

    </div>
  )
}
;
export default Timeline
