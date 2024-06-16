import React from 'react';
import InboxItem from './InboxItem';

export const InboxMessages = [
  {
    img: 'https://shismqklzntzxworibfn.supabase.co/storage/v1/object/public/avatars/9869ee0c-d5b8-48c3-a2b9-3feb4bc6fbf7.png',
    name: 'Benji',
    msg: 'This is a template message and will be cut off at a certain width at some point. Remember to import your react components.',
    tag: '2',
    time: '08:00'
  },
  {
    img: 'https://shismqklzntzxworibfn.supabase.co/storage/v1/object/public/avatars/b31bde00-b6db-48e5-9798-1c0f053360d4.jpg',
    name: 'Florin Pop',
    msg: 'Today will be an exciting day for all iCodeMembers, we will be holding a live coding battle to test our skills in JavaScript and CSS.',
    tag: null,
    time: '09:27'
  }
];

const Inbox = ({ isVisible, handleItemClick }) => {
  return (
    <div id='inbox' className={`absolute sm:static top-0 ${isVisible ? 'left-0' : '-left-full'} bg-purple-600 w-72 h-screen sm:h-full text-white overflow-hidden transition-all duration-500 z-50`}>
      <div className='grid grid-cols-[20%_60%_20%] place-items-center w-full h-14 bg-purple-800 text-purple-200 shadow-lg shadow-purple-800'>
        <i className='fa fa-search w-full h-full grid place-items-center'></i>
        <input className='w-full bg-transparent text-sm focus:outline-0 text-white' type='search' placeholder='Search' />
        <i className='fa fa-address-book bg-purple-500 text-lg text-purple-200 w-full h-full grid place-items-center'></i>
      </div>
      <div>
        <InboxItem handleClick={handleItemClick} />
      </div>
    </div>  
  );
}

export default Inbox;
