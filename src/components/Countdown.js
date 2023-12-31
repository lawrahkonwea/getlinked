import React, { useState, useEffect, useRef } from 'react';
import { calculateTimeRemaining } from '../library/helperFunction';

export default function Countdown() {
  const targetDateRef = useRef(new Date('2023-10-26T00:00:00'));
  const [remainingTime, setRemainingTime] = useState(calculateTimeRemaining(targetDateRef.current));

  useEffect(() => {
    const interval = setInterval(() => {
      const newRemainingTime = calculateTimeRemaining(targetDateRef.current);
      setRemainingTime(newRemainingTime);

      if (newRemainingTime.hours === 0 && newRemainingTime.mins === 0 && newRemainingTime.secs === 0) {
        clearInterval(interval);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="desktop:text-start text-center desktop:mt-[77px] mt-[14.16px] desktop:mb-[95px] mb-[11.77px] desktop:text-[64px] text-[48px] font-unica-one">
      {remainingTime.hours}
      <span className="text-[14px] font-montserrat">H</span>
      {' '}
      {remainingTime.mins}
      <span className="text-[14px] font-montserrat">M</span>
      {' '}
      {remainingTime.secs}
      <span className="text-[14px] font-montserrat">S</span>
    </div>
  );
}
