import React from 'react';
import TwitterIcon from '@mui/icons-material/Twitter';
import SidebarOption from './SidebarOption';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Button } from '@mui/material';

import "./Sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      {/* サイドバーアイコン metrial uiを使う */}
      <TwitterIcon className='sidebar--twitterIcon' />

      {/* サイドバーoptions */}
      <SidebarOption Icon={HomeOutlinedIcon} text="ホーム" />
      <SidebarOption Icon={SearchIcon} text="話題を検索" />
      <SidebarOption Icon={NotificationsNoneOutlinedIcon} text="通知" />
      <SidebarOption Icon={MailOutlineIcon} text="メッセージ" />
      <SidebarOption Icon={BookmarkBorderIcon} text="ブックマック" />
      <SidebarOption Icon={ListAltOutlinedIcon} text="リスト" />
      <SidebarOption Icon={PersonOutlineOutlinedIcon} text="プロフィール" />
      <SidebarOption Icon={MoreHorizIcon} text="もっとみる" />
      {/* ボタン */}
      <Button variant="outlined" className='sidebar--twitterButton' fullWidth>ツイートする</Button>
    </div>
  )
}
