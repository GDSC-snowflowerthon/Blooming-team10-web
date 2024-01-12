import "../styels/SmallGoalsTable.css";
import "../styels/GlobalStyle.css";
import {ReactComponent as GoToComplete} from "../assets/image/goToComplete.svg";
import { useNavigate } from 'react-router-dom';

function SmallGoalsTable({data, userId, nickname}) {

  const navigate = useNavigate();

  const subgoalListInData = data.subgoalList;
  const bGoal = data.goalId;

  return (
    <div className="SmallGoalsTable">
      <div className="table">
        {subgoalListInData.map((item, index) => (
          <div key={index} className="tr" onClick={() => {navigate("/fill", {state : [bGoal, item, userId, nickname]});}}>
            <div className="td">{index+1}</div>
            <div className="td" id="td2">{item.subgoalName}</div>
            <div className="td"><GoToComplete/></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SmallGoalsTable;

