import React from 'react';

const InboxMessages = [
  {
    img: 'https://shismqklzntzxworibfn.supabase.co/storage/v1/object/public/avatars/9869ee0c-d5b8-48c3-a2b9-3feb4bc6fbf7.png',
    name: 'Benji',
    msg: 'This is a template message and sill be cuz off at a certain width at somepoint. Remember to import your react components.',
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

const Inbox = () => {
  return (
    <div className='bg-purple-600 w-72 h-screen text-white overflow-hidden'>
      <div className='grid grid-cols-[20%_60%_20%] place-items-center w-full h-14 bg-purple-800 text-purple-200 shadow-lg shadow-purple-800'>
        <i className='fa fa-search w-full h-full grid place-items-center'></i>
        <input className='w-full bg-transparent text-sm focus:outline-0 text-white' type='search' placeholder='Search' />
        <i className='fa fa-address-book bg-purple-500 text-lg text-purple-200 w-full h-full grid place-items-center'></i>
      </div>
      <div>
        <InboxItem />
      </div>
    </div>  
  );
}

const InboxItem = () => {
  return (
    InboxMessages.map(item => (
      <div key={item} className='flex gap-3 p-5 overflow-hidden transition-all duration-300 hover:bg-purple-700 hover:shadow-md hover:shadow-purple-800'>
        <img className='size-14 rounded-full border-2 border-purple-500 shrink-0 object-cover' src={item.img}/>
        <div className=''>
          <h3 className='flex items-center gap-3 font-bold'>{item.name}
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
      </div>
    ))
  )
}

export default Inbox;
