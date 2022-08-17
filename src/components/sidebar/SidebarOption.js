import React from 'react';
import "./SidebarOption.css";


function SidebarOption(props) {
  const { text, Icon, active } = props;
  return (
    <div className={`sidebarOption ${active && "sidebarOptionActive"}`}>
      <Icon />
      <h2>{text}</h2>
    </div>
  )
}

export default SidebarOption
