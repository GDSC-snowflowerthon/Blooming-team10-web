import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
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
  const location = useLocation();
  const data = location.state;
  const [id, setId] = useState(data.userId);

  useEffect(() => {
    Modal.setAppElement('#root');
  }, []);

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

  console.log('in big goal')
  console.log(id);
  console.log(bGoal);
  
  const onClickDown = async () => {
    const url = "http://15.165.203.215:8080";
    const api = "/goal";

    setSGoalbyAI(true);
    sGoalbyAI();


    try {
      await axios.post(url+api,{
        userId: id,
        goalName:bGoal
      }, {withCredentials:true}).then((res) => {
        try {
          if (res.data.code === 200){
            axios.get(url+api+`/${res.data.result.goalId}?goalName=${res.data.result.goalName}`, {
              goalId : res.data.result.goalId,
              goalName : res.data.result.goalName
            }, {withCredentials:true}).then((res2) => {
              if (res2.data.code === 200){
                console.log(res2.data.result);
                console.log("goto small");
                navigate("/small", {state : res2.data.result});
              }
            })
          } else {
            console.log("call AI 실패");
          }
        } catch(err) {
          console.log("call AI 실패")
          console.log(err);
        }
      })
    } catch(err) {
      console.log("골 만들기 실패2");
      console.log(err)
    };
  };
  const sGoalbyAI = async () => {
    try {
      await setTimeout(() => {
        setSGoalbyAI(false);
        /*(() => {
          navigate('/small', { state: "세부 목표 수정" });
        })();*/
      }, 5000);
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
        <button className="goSGoalbackgroud" onClick={onClickDown}>
          <img className="goSGoalbutton" src={goSmallGoal} alt="goSGoal" />
          <Modal isOpen={SGoalbyAI} style={customStyles}>
            <p className="SGoalbyAItext">
              {bGoal}을/를 이루기 위한<br />AI 세부 목표 생성 중</p>
            <img className="loading" src={loading} alt="loading" />
          </Modal>
        </button>
        <button className="goStorage" onClick={goStorage}>
        </button>
        </div>
      </div>
    )
  }
  
export default BigGoalPage;