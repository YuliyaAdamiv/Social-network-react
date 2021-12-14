import {rerenderEntireTree} from '../render';
let state = {
  profilePage: {
    posts: [
      {message: 'Hi', like: '35'},
      {message: 'Hello', like: '40'},
      {message: 'Where were do you live?', like: '81'},
    ],
    newPostText: 'Hello, world!',
  },
  messagePage: {
    dialog: [
      {id: 1, name: 'Sveta'},
      {id: 2, name: 'Viktor'},
      {id: 3, name: 'Dima'},
      {id: 4, name: 'Sasha'},
      {id: 5, name: 'Andrey'},
      {id: 6, name: 'Sasha'},
    ],
    message: [
      {id: 1, message: 'Hi'},
      {id: 2, message: 'How are you?'},
      {id: 3, message: 'Yo?'},
      {id: 4, message: 'Yo!'},
      {id: 5, message: 'Yo3'},
      {id: 6, message: 'Yo%'},
    ],
  },
  sidebarPage: {
    friend: [
      {id: 1, name: 'Sveta'},
      {id: 2, name: 'Viktor'},
      {id: 3, name: 'Sasha'},
    ],
  },
};
export let addPost = () => {
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    like: 7,
  };
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = '';
  rerenderEntireTree(state);
};
export let updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
};

export default state;
