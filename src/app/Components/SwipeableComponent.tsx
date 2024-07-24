import React, { useState, useEffect, useRef } from 'react';
import { useSwipeable } from 'react-swipeable';

const SwipeableComponent = () => {
  const [style, setStyle] = useState<React.CSSProperties>({});
  const swipeableRef = useRef<HTMLDivElement>(null);

  const handleSwiping = (eventData: any) => {
    const { dir, deltaX, deltaY } = eventData;

    console.log(`Swiping direction: ${dir}, deltaX: ${deltaX}, deltaY: ${deltaY}`); // Debugging log

    let transform = '';
    switch (dir) {
      case 'Left':
        transform = `translateX(${-deltaX}px)`;
        break;
      case 'Right':
        transform = `translateX(${deltaX}px)`;
        break;
      case 'Up':
        transform = `translateY(${-deltaY}px)`;
        break;
      case 'Down':
        transform = `translateY(${deltaY}px)`;
        break;
      default:
        transform = '';
    }

    setStyle({
      transform,
      transition: 'transform 0.3s ease'
    });
  };

  const handlers = useSwipeable({
    onSwiping: handleSwiping,
    trackMouse: true // Enables mouse swipe detection
  });

  // Custom touch move event handler to prevent default behavior
  useEffect(() => {
    const handleTouchMove = (e: TouchEvent) => {
      e.preventDefault();
    };

    const element = swipeableRef.current;
    if (element) {
      element.addEventListener('touchmove', handleTouchMove, { passive: false });
    }

    return () => {
      if (element) {
        element.removeEventListener('touchmove', handleTouchMove);
      }
    };
  }, []);

  return (
    <div
      {...handlers}
      ref={swipeableRef}
      style={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        ...style
      }}
    >
      Swipe Me!
    </div>
  );
};

export default SwipeableComponent;
