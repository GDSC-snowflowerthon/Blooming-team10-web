import React from 'react';
import styled from 'styled-components';


const SnowFlower2 = ({height, i}) => {

  return (
    <svg  width="228" height="228" viewBox="0 0 228 228">
      <svg 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        >
        <defs>
          <clipPath id="fillSnowFlower0">
            <rect x="0" y={height} width="84" height={114}/>
          </clipPath>
        </defs>
        <g clipPath="url(#fillSnowFlower0)" fill="skyblue">
          <path d="M32.3715 26.2317V0.5H52.2543V26.2317V26.8725L52.8759 26.7166C56.9918 25.6845 60.9321 24.0485 64.5687 21.8619L64.5691 21.8616L73.0825 16.7328L83.3447 33.7643L74.8316 38.893C74.8315 38.893 74.8315 38.8931 74.8314 38.8931C68.0269 42.9882 60.508 45.757 52.6727 47.0531L52.2543 47.1223V47.5464V113.406H32.3715V47.5464V47.1223L31.9531 47.0531C24.1177 45.757 16.5988 42.9882 9.79419 38.893L1.28106 33.7643L11.5433 16.7328L20.0567 21.8616L20.0571 21.8619C23.6936 24.0485 27.634 25.6845 31.7499 26.7166L32.3715 26.8725V26.2317Z" stroke="#0D47A1"/>
        </g>
      </svg>
    </svg>

  );
};

export default SnowFlower2;
