import React from 'react';
import {NavLink} from 'react-router-dom';
import './SiderbarItem.modules.css';
const SidebarItems = (props) => {
  return (
    <div className="sidebar-container">
      <div>
        <img
          className="ava-friend"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFgi4piROhXId9Axap-4m2lCPJMJTPFw4lMQ&usqp=CAU"
          alt="profile"
        />
      </div>
      <div className="text">
        <NavLink to={'/dialogs/' + props.id}>{props.name} </NavLink>
      </div>
    </div>
  );
};
export default SidebarItems;
