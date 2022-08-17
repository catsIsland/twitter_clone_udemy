import Search from '@mui/icons-material/Search';
import React from 'react';
import { TwitterTimelineEmbed, TwitterShareButton,  TwitterTweetEmbed } from 'react-twitter-embed';
import "./Weidget.css"

function Weidget() {
  return (
    <div className='widgets'>
      {/** 検索ボックス */}
      <div className='widgets--input'>
        <Search className='widgets--searchIcon'/>
        <input type="text" placeholder='キーワード検索'/>
      </div>
      {/** twitter real time */}
      <div className='widgets--widgetContainer'>
        <h2>いまどうしている</h2>

        {/** library追加 */}
        <TwitterTweetEmbed tweetId={'1559544735366144002'}/>
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="Starbucks_J"
          options={{height: "500px"}}
        />
        <TwitterShareButton
          url={'https://facebook.com/Starbucks_J'}
          options={{ text: '#ぶどうホワイトチョコレートクリームフラペチーノ is awesome', via: 'H_mei_22' }}
        />
      </div>
    </div>
  )
}

export default Weidget
