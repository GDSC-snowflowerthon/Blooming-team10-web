import React from 'react';
import styled, { keyframes } from 'styled-components';

const drawLine = keyframes`
  to {
    stroke-dashoffset: 0;
  }
`;

const SnowflakeWrapper = styled.div`
  position: relative;
  width: 243px;
  height: 243px;
`;

const SnowflakeLine = styled.path`
  stroke: #0D47A1;
  stroke-width: 10;
  fill: none;
  stroke-dasharray: 1000;
  stroke-dashoffset: 1000;
  animation: ${drawLine} 2s ease forwards;
`;

const Snowflake = () => {
  return (
    <SnowflakeWrapper>
      <SnowflakeLine d="M121.5 10.5L121.5 232.5" />
      <SnowflakeLine d="M121.5 10.5L40.5 232.5" />
      <SnowflakeLine d="M121.5 10.5L202.5 232.5" />
      <SnowflakeLine d="M121.5 10.5L40.5 45" />
      <SnowflakeLine d="M121.5 10.5L202.5 45" />
      <SnowflakeLine d="M121.5 10.5L121.5 45" />
    </SnowflakeWrapper>
  );
};

export default Snowflake;
