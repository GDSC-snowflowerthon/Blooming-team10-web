import '../styels/ShowFlowerPage.css';
import "../styels/GlobalStyle.css";
import SnowFlower4 from "../components/SnowFlower4";
import SmallGoalsTable from "../components/SmallGoalsTable";
import { useState } from 'react';
import {ReactComponent as Profile} from "../assets/image/profile.svg";
import moment from "moment";
import {ReactComponent as Snowman} from "../assets/image/snowman.svg";


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

  const nickname = "나여이";
  const createdAt = new Date(data[2].goalCreateDate);
  const today = new Date();
  const dayCount = moment(today).diff(createdAt, "days");
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
        <Snowman id="snowman"/>
      </div>
    </div>
  );
}

export default ShowFlowerPage;
