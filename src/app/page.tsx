'use client'
import React, { useEffect, useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import SwipeableComponent from '@/app/Components/SwipeableComponent'

const Page = () => {

  const [swipeRight, setSwipeRight] = useState(false)
  const [swipeLeft, setSwipeLeft] = useState(false)
  const [textChange, setTextChange] = useState(false)
  const [textChange2, setTextChange2] = useState(false)

  const handlers = useSwipeable({
    onSwipedRight: () => { console.log('Swiped to the right'); setSwipeRight(true); setSwipeLeft(false) },
    onSwipedLeft: () => { console.log('Swiped to the left'); setSwipeLeft(true); setSwipeRight(false) },
    onTap: () => { setSwipeLeft(false); setSwipeRight(false) }
  });

  useEffect(() => {
    const handleSpace = (e: KeyboardEvent) => {
      if (e.key === ' ') {
        console.log('askjvbidvb')
      }
    }
    document.addEventListener('keydown', handleSpace)

    return () => {
      document.removeEventListener('keydown', handleSpace);
    };
  }, [])

  const [clickText, setClickText] = useState('')

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
        Click on the polygons and it will tell you the position!
      </p>
      <p className='text-center pb-5 text-[20px]'>
        {clickText}
      </p>

      <div className='w-full h-full absolute'>
        <svg viewBox='0 0 100 100'>
          <polygon points='-10,0 50,50 110,0' fill='blue' onClick={() => setClickText('clicked top')} />
          <polygon points='-10,0 50,50 -10,100' fill='yellow' onClick={() => setClickText('clicked left')} />
          <polygon points='-10,100 50,50 110,100' fill='green' onClick={() => setClickText('clicked bottom')} />
          <polygon points='110,0 50,50 110,100' fill='red' onClick={() => setClickText('clicked right')} />
        </svg>
      </div>

      {/* <SwipeableComponent></SwipeableComponent> */}



    </div>
  );
};

export default Page;
