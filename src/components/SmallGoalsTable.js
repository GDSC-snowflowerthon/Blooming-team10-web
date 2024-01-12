import "../styels/SmallGoalsTable.css";
import "../styels/GlobalStyle.css";
import {ReactComponent as GoToComplete} from "../assets/image/goToComplete.svg";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";

function SmallGoalsTable({data}) {

  const navigate = useNavigate();

  const subgoalListInData = data[3].subgoalList;
  const bGoal = data[1].goalId;

  //

  return (
    <div className="SmallGoalsTable">
      <div className="table">
        {subgoalListInData.map((item, index) => (
          <div key={index} className="tr" onClick={() => {navigate("/fill", {state : [bGoal, index]});}}>
            <div className="td">{item.subgoalId}</div>
            <div className="td" id="td2">{item.subgoalName}</div>
            <div className="td"><GoToComplete/></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SmallGoalsTable;

