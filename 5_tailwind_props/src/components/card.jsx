import React from 'react'

function Card({username, btnText}) {
  // props help to pass value from one component to another component
  //console.log(props.username);
  
  // or we can take {username}-->instate of props in card()
  console.log(username);
  
  
  return (
    <>
     <div className="max-w-xs p-6 rounded-md shadow-md bg-black">
        <img
          src="https://source.unsplash.com/300x300/?random"
          alt=""className="object-cover object-center w-full rounded-md h-72 bg-gray-500"/>
        <div className="mt-6 mb-2">
          <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
            Title
          </span>
          <h2 className="text-xl font-semibold tracking-wide">{username}</h2>
        </div>
        <p className="text-gray-300">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio tempora ipsum soluta
          amet
        </p>
        <button
          className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition">
            {btnText} ➡️
        </button>
      </div>
     <div className="max-w-xs p-6 rounded-md shadow-md bg-black">
        <img
          src="https://source.unsplash.com/300x300/?random"
          alt=""className="object-cover object-center w-full rounded-md h-72 bg-gray-500"/>
        <div className="mt-6 mb-2">
          <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
            Title
          </span>
          <h2 className="text-xl font-semibold tracking-wide">{username}</h2>
        </div>
        <p className="text-gray-300">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio tempora ipsum soluta
          amet
        </p>
        <button
          className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition">
            {btnText} ➡️
        </button>
      </div>
    </>
  );
}

export default Card;



