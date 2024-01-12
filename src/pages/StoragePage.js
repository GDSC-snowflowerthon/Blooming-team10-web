// import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import axios from "axios";
import SnowFlower from "../components/SFlake";
import backIcon from '../assets/image/backIcon.svg';
import "../styels/storagePage.css";
// 모두 행복하기 건강하기 all A+ 받기 알고리즘 천재되기

function StoragePage() {
  const navigate = useNavigate();
  
  return (
    <div className="StoragePage">
        <button className="backHome" onClick={() => navigate("/")}>
            <img className="backIcon" src={backIcon} alt="backHome"/>
        </button>
        <SnowFlower />
    </div>
  );
}

export default StoragePage;