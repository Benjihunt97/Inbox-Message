import React from 'react';
import ReactDOM from 'react-dom';
import Inbox from './components/inbox.js';

const App = () => {
  return (
    <div>
      <Inbox />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('react-app')
);
