import React from 'react';
import './Dialogs.modules.css';
import {
  updateNewMessageBodyCreator,
  sendMessageCreator,
} from '../../redux/dialogsReducer';
import Dialogs from '../Dialogs/Dialogs';
const DialogsContainer = (props) => {
  let onNewMessageChange = (body) => {
    props.store.dispatch(updateNewMessageBodyCreator(body));
  };
  let onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator());
  };
  return (
    <Dialogs
      updateNewMessageBody={onNewMessageChange}
      sendMessage={onSendMessageClick}
      dialogs={props.store}
      state={props.state}
    />
  );
};
export default DialogsContainer;
