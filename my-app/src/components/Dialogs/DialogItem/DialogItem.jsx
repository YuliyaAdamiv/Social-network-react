import React from 'react';
import {NavLink} from 'react-router-dom';
import './DialogItem.modules.css';
const Dialog = (props) => {
  return (
    <div className="dialog">
      <img
        className="ava"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFgi4piROhXId9Axap-4m2lCPJMJTPFw4lMQ&usqp=CAU"
        alt="profile"
      />
      <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
    </div>
  );
};
export default Dialog;
