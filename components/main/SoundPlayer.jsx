'use client'
import React, { useState, useRef } from 'react';
import { IoVolumeMute } from "react-icons/io5";
import { RiVolumeUpFill } from "react-icons/ri";
const SoundPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const volume = 0.1; 
  const audioRef = useRef(null);

  const toggleSound = () => {
    if (audioRef.current) {
      audioRef.current.volume = volume;

      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
    }

    setIsPlaying(!isPlaying);
  };

  return (
    <div>
      {/* Play/Pause button with speaker icons */}
      <button onClick={toggleSound}>
        {isPlaying ? <IoVolumeMute /> : <RiVolumeUpFill/>}
      </button>

      {/* Audio element */}
      <audio ref={audioRef} src="/sound.mp3" />
    </div>
  );
};

export default SoundPlayer;













