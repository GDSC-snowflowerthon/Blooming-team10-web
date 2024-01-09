import '../styels/FillFlowerPage.css';
import '../styels/GlobalStyle.css';
import {ReactComponent as Branch} from "../assets/image/branch.svg";
import { useState } from 'react';
import DatesTable from "../components/DatesTable";




function FillFlowerPage() {
  const [done, setDone] = useState(false);
  const [count, setCount] = useState(0);
  const [height, setHeight] = useState(490);

  function complete() {
    setDone(true);
    var newCount = count;
    newCount += 1;
    setCount(newCount);
    setHeight(490 - (493/10 * newCount) < 0 ?  0 : 490 - (493/10 * newCount));
  }

  
  
  return (
    <div id="fillFlowerPage">
      <div className='pageTitle'>
        <p id="title">물 1L 마시기</p>
        <p id="percentage">{count*10}%</p>
      </div>
      <div id="branchWrapper">
        <div id="eraseBranch" style={{height:height}}></div>
        <div id="fillBranch"></div>
        <DatesTable id="dateTable"/>
      </div>
      <div id="buttonWrapper">
        <button id="complete" onClick={complete}>1월 6일 완료</button>
      </div>
    </div>
  );
}

export default FillFlowerPage;
