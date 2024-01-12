import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from "axios";
import SGoal from '../components/SGoal';
import backIcon from '../assets/image/backIcon.svg';

function SmallGoalPage() {
    const navigate = useNavigate();
    const location = useLocation();
    const userId = location.state.userId;
    const goalId = location.state.goalId;
    const tempList = Object.values(location.state.subgoalList);
    const subgoalList = tempList.map(value => value.split(":").slice(1).join(":").trim());


    const backBGoal = () => {
      navigate('/big');
    };

    const [bGoal, setBGoal] = useState();
        const saveBGoal = (e) => {
        setBGoal(e.target.value);
    };
    const onClickDown = async () => {
      const url = "http://15.165.203.215:8080";
      const api = `/goal/${goalId}`;
      try {
        await axios.post(url+api,{
          goalId: goalId,
          subGoalList : subgoalList
        }).then((res) => {
          if (res.data.code === 200)
            navigate("/", {state:[userId, goalId]});
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
        <p className="Header">세부 목표 수정</p>
        <SGoal data={subgoalList}/>
        <button className="completeButton" onClick={onClickDown}>완료</button>
      </div>
    )
  }
  
export default SmallGoalPage;