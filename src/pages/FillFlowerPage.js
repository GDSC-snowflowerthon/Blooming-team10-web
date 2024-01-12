import '../styels/FillFlowerPage.css';
import '../styels/GlobalStyle.css';
import {ReactComponent as Branch} from "../assets/image/branch.svg";
import {ReactComponent as X} from "../assets/image/X.svg";
import { useState, useRef, useEffect } from 'react';
import PointLine from "../components/PointLine";
import OneBranch from "../components/OneBranch";
import { useNavigate, useLocation } from 'react-router-dom';
import moment from "moment";
import axios from "axios";


function FillFlowerPage({}) {

  const navigate = useNavigate();
  const location = useLocation();


  const [done, setDone] = useState(false);
  const [subgoalName, setSubgoalName] = useState(location.state[1].subgoalName);
  const [doneDateList, setDoneDataList] = useState(location.state[1].doneDateList);
  const [doneDatesCount, setDonDatesCount] = useState(doneDateList.filter(date => date !== null).length);
  
  const goalId = location.state[0];
  const subGoalId = location.state[1].subGoalId;
  const userId = location[2];
  const nickname = location[3];

  // index+1 해서 사용


  const complete = async (e) => {
    var newCount = doneDatesCount;
    doneDateList[doneDatesCount] = moment().format("YY-MM-DD");
    newCount += 1;
    setDonDatesCount(newCount);
    setDone(true);

    const newDate = document.querySelector(`.date:nth-child(${newCount})`);
    newDate.style.color = "#000"

    const url = "http://15.165.203.215:8080";
    const api = `/subgoal/${goalId}/detail/${subGoalId}`;
    console.log(url+api);
    await axios.post(url+api, {withCredentials:true}).then((res) => {
    }).catch((err)=>{
        console.log("err");
        console.log(err);
    })
  }

  const today = moment().format("M월 D일");

  const getData = async (e) => {

  }
  
  getData();

  if (doneDateList === null) {
    return null;
  } else {
    return (
      <div id="fillFlowerPage">
        <a onClick={() => {navigate("/", {state:{userId:userId, nickname:nickname}});}}><X id="xButton"/></a>
        <div id='fillPageTitle'>
          <p id="title">{subgoalName}</p>
          <p id="percentage">{doneDatesCount*10}%</p>
        </div>
        <div className='ComponentsClass'>
          <div id="branchWrapper">
            <div id="oneBranchWrapper">
              <OneBranch id="oneBranch" height={490 - 49*doneDatesCount}/>
            </div>
            <Branch id="branchLine"/>
          </div>
          <PointLine id="pointLine" y={490 - 49*doneDatesCount}/>
          <div id="datesWrapper">
            {doneDateList.map((item, index) => (
              item === null
              ?  <div key={index} className={"date hiddenText"}>{item}</div>
              : <div key={index} className={"date"}>{item}</div>
            ))}
          </div>
          <div id="buttonWrapper">
            { done ? 
              <button id="afterComplete">오늘은 이미 완료했어요</button> 
              : <button id="beforeComplete" onClick={complete}>{today} 완료</button>
            }
          </div>
        </div>
      </div>
    );
  }
}

export default FillFlowerPage;
