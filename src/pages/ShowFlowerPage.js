import '../styels/ShowFlowerPage.css';
import "../styels/GlobalStyle.css";
import SnowFlower4 from "../components/SnowFlower4";
import SmallGoalsTable from "../components/SmallGoalsTable";
import { useState } from 'react';
import {ReactComponent as Profile} from "../assets/image/profile.svg";
import moment from "moment";
import {ReactComponent as Snowman} from "../assets/image/snowman.svg";
import {useLocation, useNavigate} from "react-router-dom";
import axios from "axios";

function ShowFlowerPage() {

  const navigate = useNavigate();
  const location = useLocation();
  const userId = location.state.userId;
  const nickname = location.state.nickname;

  const [data, setData] = useState(null);

  const checkUser = async (e) => {
    const url = "http://15.165.203.215:8080";
    const api = `/subgoal/${userId}/progress`;

    console.log(location.state);
    console.log(userId);

    await axios.get(url+api, {withCredentials:true}).then((res) => {
      setData(res.data);
    }).catch((err)=>{
        console.log("err");
    })
  }
  
  checkUser();

  const goStorage = () => {
    navigate('/storage');
  }


  if (data === null) {
    return null;
  } else {
    const createdAt = new Date(data.goalCreateDate);
    const today = new Date();
    const dayCount = moment(today).diff(createdAt, "days");

    
    return (
      <div id="showFlowerPage">
        <div id='showPageTitle'>
          <div id="profileIcon"><Profile/></div>
          <p id="title">{nickname}의 눈꽃</p>
          <p id="day">DAY {dayCount}</p>
        </div>
  
        <div className='ComponentsClass'>
          <SnowFlower4 id="flower" data={data.subgoalList}/>
          <h2 id="bGoal">{data.goalName}</h2>
          <SmallGoalsTable id="smallGoalTable" data={data} userId={userId} nickname={nickname}/>
          <button className="goStorage" onClick={goStorage}><Snowman className="snowman"/></button>
        </div>
      </div>
    );
  }
  
}

export default ShowFlowerPage;
