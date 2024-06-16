import React from 'react';
import { InboxMessages } from './inbox';

const InboxItem = ({ handleClick }) => {
  return (
    <div>
      {InboxMessages.map((item, index) => (
        <button 
          onClick={() => handleClick(item)} 
          key={index} 
          className='flex gap-3 p-5 overflow-hidden transition-all duration-300 hover:bg-purple-700 hover:shadow-md hover:shadow-purple-800'
        >
          <img className='size-14 rounded-full border-2 border-purple-500 shrink-0 object-cover' src={item.img} alt={item.name}/>
          <div>
            <h3 className='flex items-center gap-3 font-bold'>
              {item.name}
              {item.tag ? (
                <span className='grid place-items-center size-4 bg-pink-500 rounded-full text-xs'>
                  {item.tag}
                </span>
              ) : null}
            </h3>
            <p className='text-xs clipped-line'>
              {item.msg}
            </p>
          </div>
          <p className='text-xs text-purple-200'>{item.time}</p>
        </button>
      ))}
    </div>
  )
}

export default InboxItem;
