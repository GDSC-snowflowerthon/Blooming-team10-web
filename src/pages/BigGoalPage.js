import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./styels/BigGoalPage.css";

function BigGoalPage() {
    const navigate = useNavigate();
    const [bGoal, setBGoal] = useState();
        const saveBGoal = (e) => {
        setBGoal(e.target.value);
    };
    return (
      <div className="bigGoalPage">
        <h1>새로운 목표 설정</h1>
        <input type="text" placeholder="10일 동안 달성하고 싶은 목표가 무엇인가요?"onChange={saveBGoal}/>
        <button className="goSGoal" onClick={() => navigate('Small')}>{'>'}</button>
      </div>
    )
  }
  
  export default BigGoalPage;