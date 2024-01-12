// import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import axios from "axios";
import SnowFlower from "../components/CompletedSnowFlake";
import backIcon from '../assets/image/backIcon.svg';
import "../styels/StoragePage.css";

function StoragePage() {

  const navigate = useNavigate();
  
  return (
    <>
    <div className="StoragePage">
        <button className="backHome" onClick={() => navigate("/")}>
            <img className="backIcon" src={backIcon} alt="backHome"/>
        </button>
        <SnowFlower />
    </div></>
  );
}

export default StoragePage;