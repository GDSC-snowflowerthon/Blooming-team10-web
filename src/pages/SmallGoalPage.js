import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from "axios";
import SGoal from '../components/SGoal';
import backIcon from '../assets/image/backIcon.svg';
import "../styels/SmallGoalPage.css";

function SmallGoalPage() {
    const navigate = useNavigate();
    const { state } = useLocation();
    const backBGoal = () => {
      navigate('/big');
    };
    const [bGoal, setBGoal] = useState();
        const saveBGoal = (e) => {
        setBGoal(e.target.value);
    };
    const onClickDown = async () => {
      const url = "/goal";
      try {
        await axios.post(url,{
          goalName: bGoal,
        });
      } catch(err) {
        console.log(err)
      };
    };
    return (
      <div className="smallGoalPage">
        <button className="backBGoal" onClick={backBGoal}>
          <img className="backBGoalButton" src={backIcon} alt="backBGoal" />
        </button>
        <p className="Header">{state}</p>
        <SGoal />
      </div>
    )
  }
  
export default SmallGoalPage;