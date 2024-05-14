'use client'
import React, { useEffect, useState } from 'react';
import { useSwipeable } from 'react-swipeable';

const Page = () => {

  const [swipeRight, setSwipeRight] = useState(false)
  const [swipeLeft, setSwipeLeft] = useState(false)

  const handlers = useSwipeable({
    onSwipedRight: () => {console.log('Swiped to the right'); setSwipeRight(true); setSwipeLeft(false)},
    onSwipedLeft: () => {console.log('Swiped to the left'); setSwipeLeft(true); setSwipeRight(false)},
    onTap: () => {setSwipeLeft(false); setSwipeRight(false)}
  });

  return (
    <div {...handlers} className={`text-center flex justify-center items-center h-screen w-screen ${swipeLeft ? 'bg-red-200' : 'bg-white'} ${swipeRight ? 'bg-green-200' : 'bg-white'}`}>
      <button className={`drop-shadow-lg bg-white rounded-2xl p-4  ${swipeLeft ? 'bg-red-400' : 'bg-white'} ${swipeRight ? 'bg-green-400' : 'bg-white'}`}>
        Swipe Me!
        <br />
        Click to reset
      </button>
    </div>
  );
};

export default Page;
