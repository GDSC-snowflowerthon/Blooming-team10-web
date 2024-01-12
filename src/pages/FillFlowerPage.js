import '../styels/FillFlowerPage.css';
import '../styels/GlobalStyle.css';
import {ReactComponent as Branch} from "../assets/image/branch.svg";
import {ReactComponent as X} from "../assets/image/X.svg";
import { useState, useRef, useEffect } from 'react';
import PointLine from "../components/PointLine";
import OneBranch from "../components/OneBranch";
import { useNavigate, useLocation } from 'react-router-dom';
import moment from "moment";




function FillFlowerPage({}) {
  const [done, setDone] = useState(false);
  const [subgoalName, setSubgoalName] = useState("default");
  const [doneDataList, setDoneDataList] = useState(["24-01-01","24-01-02","24-01-03","24-01-04", "24-01-06"]); //
  const [doneDataListForDraw, setDoneDataListForDraw] = useState(["24-01-01","24-01-02","24-01-03","24-01-04", "24-01-06"].concat(Array(10 - doneDataList.length).fill("0")));
  const [doneDatesCount, setDonDatesCount] = useState(doneDataList.length);
  
  const navigate = useNavigate();
  const location = useLocation();

  console.log(location.state);

  console.log(doneDataList);
  // index+1 해서 사용


  function complete() {
    var newCount = doneDatesCount;
    doneDataListForDraw[doneDatesCount] = moment().format("YY-MM-DD");
    newCount += 1;
    setDonDatesCount(newCount);
    setDone(true);

    const newDate = document.querySelector(`.date:nth-child(${newCount})`);
    newDate.style.color = "#000"
  }

  const today = moment().format("M월 D일");


  //page 로드와 동시에 데이터 주고 받기
  //subgoalName, doneDataList


  return (
    <div id="fillFlowerPage">
      <a onClick={() => {navigate(-1);}}><X id="xButton"/></a>
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
          {doneDataListForDraw.map((item, index) => (
            item === "0"
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

export default FillFlowerPage;
