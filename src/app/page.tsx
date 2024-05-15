'use client'
import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';

const Page = () => {

  const [swipeRight, setSwipeRight] = useState(false)
  const [swipeLeft, setSwipeLeft] = useState(false)

  const handlers = useSwipeable({
    onSwipedRight: () => { console.log('Swiped to the right'); setSwipeRight(true); setSwipeLeft(false) },
    onSwipedLeft: () => { console.log('Swiped to the left'); setSwipeLeft(true); setSwipeRight(false) },
    onTap: () => { setSwipeLeft(false); setSwipeRight(false) }
  });

  return (
    <div>
      <div {...handlers} className={`text-center flex justify-center items-center h-screen w-screen ${swipeLeft ? 'bg-red-200' : ''} ${swipeRight ? 'bg-green-200' : ''}`}>
        <button className={`drop-shadow-lg rounded-2xl p-4 ${swipeLeft ? 'bg-red-400' : ''} ${swipeRight ? 'bg-green-400' : ''}`}>
          Swipe Me!
          <br />
          Click to reset
          <br />
          <p className='text-slate-600'>
            Swiping only works when in responsive inspect
          </p>
        </button>
      </div>

      <p className='text-center py-10'>
        Polygons are a nightmareee - Jar ;(
      </p>

      <div className='w-full h-full absolute'>
        <svg viewBox='0 0 100 100'>
          <polygon points='-10,0 50,50 110,0' fill='blue'/>
          <polygon points='-10,0 50,50 -10,100' fill='yellow' />
          <polygon points='-10,100 50,50 110,100' fill='green' />
          <polygon points='110,0 50,50 110,100' fill='red'/>
        </svg>
      </div>

    </div>
  );
};

export default Page;
