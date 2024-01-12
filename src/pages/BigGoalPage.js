import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import Modal from "react-modal";
import showPrsnData from '../assets/image/showPrsnData.svg';
import goSmallGoal from '../assets/image/goSGoal.png';
import loading from '../assets/image/loading.svg';
import snowmanUrl from "../assets/image/snowman.png";
import "../styels/BigGoalPage.css";
import "../styels/GlobalStyle.css";

function BigGoalPage() {
  const navigate = useNavigate();
  const goStorage = () => {
    navigate('/storage');
  }
  const [bGoal, setBGoal] = useState();
    const saveBGoal = (e) => {
        setBGoal(e.target.value);
    };
  const [SGoalbyAI, setSGoalbyAI ] = useState(false);
  const customStyles = {
    overlay: {
      background: "rgba(137, 156, 171, 0.80)",
        backdropFilter: "blur(2px)",
    },
    content: {
        width: "325px",
        height: "164px",
        borderRadius: "15px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
        margin: "285px 0px 285px 0px",
        padding: "0px",
    },
  }
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
  const sGoalbyAI = async () => {
    try {
      await setTimeout(() => {
        setSGoalbyAI(false);
        (() => {
          navigate('/small', { state: "세부 목표 수정" });
        })();
      }, 2000);
    } catch(err) {
      console.log(err)
    };
  };
    return (
      <div className="bigGoalPage">
        <div className='componentsClass'>
        <img className="showPrsnData" src={showPrsnData} alt="showPrsnData" />
        <h1>새로운 목표 설정</h1>
        <input type="text" id="inputBGoal" name="inputBGoal"
          placeholder="10일 동안 달성하고 싶은 목표가 무엇인가요?" onChange={saveBGoal} />
        <button className="goSGoalbackgroud" onClick={() => { onClickDown(); setSGoalbyAI(true); sGoalbyAI(); } }>
          <img className="goSGoalbutton" src={goSmallGoal} alt="goSGoal" />
          <Modal isOpen={SGoalbyAI} style={customStyles}>
            <p className="SGoalbyAItext">
              {bGoal}을/를 이루기 위한<br />AI 세부 목표 생성 중</p>
            <img className="loading" src={loading} alt="loading" />
          </Modal>
        </button>
        <button className="goStorage" onClick={goStorage}>
          <img className="snowman" src={snowmanUrl} alt="snowman"></img>
        </button>
        </div>
      </div>
    )
  }
  
export default BigGoalPage;