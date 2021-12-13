import React from 'react';
import './Post.modules.css';
const Post = (props) => {
  return (
    <div>
      <img
        className="post"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFgi4piROhXId9Axap-4m2lCPJMJTPFw4lMQ&usqp=CAU"
        alt="foto"
      />
      {props.message}
      <div>like {props.like}</div>
    </div>
  );
};

export default Post;
