import '../styels/ShowFlowerPage.css';
import "../styels/GlobalStyle.css";
import SnowFlower4 from "../components/SnowFlower4";
import SmallGoalsTable from "../components/SmallGoalsTable";
import { useState } from 'react';
import {ReactComponent as Profile} from "../assets/image/profile.svg";
import moment from "moment";
import {ReactComponent as Snowman} from "../assets/image/snowman.svg";
import {useLocation} from "react-router-dom";
import axios from "axios";


const data = [
  {goalName : "10kg 감량하기"},
  {goalId : "2"},
  {goalCreateDate : "2024-01-08T06:12:04.325+00:00"},
  {subgoalList : [  
    {subgoalId:"1", subgoalName : "물 1L 마시기", doneDateList:["24-01-11", "24-01-11", "24-01-11", "24-01-11"]},
    {subgoalId:"2", subgoalName : "물 2L 마시기", doneDateList:["24-01-11","24-01-11","24-01-11","24-01-11","24-01-11","24-01-11"]},
    {subgoalId:"3", subgoalName : "물 3L 마시기", doneDateList:["24-01-11","24-01-11", "24-01-11", "24-01-11"]},
    {subgoalId:"4", subgoalName : "물 4L 마시기", doneDateList:["24-01-11","24-01-11","24-01-11","24-01-11","24-01-11"]},
    {subgoalId:"5", subgoalName : "물 5L 마시기", doneDateList:["24-01-11","24-01-11","24-01-11","24-01-11","24-01-11","24-01-11","24-01-11"]},
    {subgoalId:"6", subgoalName : "물 6L 마시기", doneDateList:["24-01-11","24-01-11","24-01-11","24-01-11","24-01-11","24-01-11","24-01-11","24-01-11","24-01-11"]}
  ]}
];


function ShowFlowerPage() {

  const location = useLocation();
  const userId = location.state.userId;
  const nickname = location.state.nickname;
  const goalId = location.state.activeGoalId;

  console.log(userId + " : " + goalId );

  //const [data, setData] = useState([]);

  const checkUser = async (e) => {
    const url = "http://15.165.203.215:8080";
    const api = `/subgoal/${goalId}/progress`;

    console.log(url+api);

    await axios.get(url+api, {
      params : {userId : userId}
    }, {withCredentials:true}).then((res) => {
      console.log(res);
        if (res.data.code === 200) {
            console.log(res.data.code);
            console.log(res.data.result);
            //setData(res.data.result)
        } else if (res.data.code === 400) {
            console.log(res.data.code);
            /*setPopup({
                open:true,
                title:"Fail",
                message: res.data.message
            });*/
        }
    }).catch((err)=>{
        console.log("err");
        console.log(err);
    }).then((res) => {
      console.log(res);
    })
  }
  
  checkUser();

  const createdAt = new Date(data[2].goalCreateDate);
  const today = new Date();
  const dayCount = moment(today).diff(createdAt, "days");

  const [goalName, setGoalName] = useState(data.goalName);
  //nickname 로그인 후에 받아와야 함


  
  return (
    <div id="showFlowerPage">
      <div id='showPageTitle'>
        <div id="profileIcon"><Profile/></div>
        <p id="title">{nickname}의 눈꽃</p>
        <p id="day">DAY {dayCount}</p>
      </div>

      <div className='ComponentsClass'>
        <SnowFlower4 id="flower" data={data[3].subgoalList}/>
        <h2 id="bGoal">10kg 감량하기</h2>
        <SmallGoalsTable id="smallGoalTable" data={data}/>
        <Snowman className="snowman"/>
      </div>
    </div>
  );
}

export default ShowFlowerPage;
