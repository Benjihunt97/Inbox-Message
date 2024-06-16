import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import InboxItem from './components/InboxItem';
import MessageDisplay from './components/messageBox';
import Inbox from './components/inbox';

const App = () => {
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [inboxVisible, setInboxVisible] = useState(false);

  const handleItemClick = (item) => {
    setSelectedMessage(item);
    setInboxVisible(false);  // Hide inbox when a message is selected
  };

  const toggleInbox = () => {
    setInboxVisible(!inboxVisible);
  };

  return (
    <div className="app grid sm:grid-cols-[40%_auto]">
      <Inbox isVisible={inboxVisible} handleItemClick={handleItemClick} />
      <div className="message-display">
        <MessageDisplay 
          selectedMessage={selectedMessage} 
          toggleInbox={toggleInbox} 
        />
      </div>
    </div>
  );
};

ReactDOM.render(
  <App />,
  document.getElementById('react-app')
);
