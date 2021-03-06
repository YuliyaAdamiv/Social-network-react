import React from 'react';
import Post from './Post/Post';

const MyPosts = (props) => {
  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost();
  };
  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  };
  return (
    <div>
      <h3>My Posts</h3>
      <div>
        <textarea
          onChange={onPostChange}
          ref={newPostElement}
          value={props.newPostText}
        />
      </div>
      <div>
        <button onClick={onAddPost}>Add post</button>
      </div>
      {props.posts.map((posts) => (
        <Post message={posts.message} like={posts.like} />
      ))}
    </div>
  );
};

export default MyPosts;
