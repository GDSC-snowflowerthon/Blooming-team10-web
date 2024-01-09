import '../styels/ShowFlowerPage.css';
import "../styels/GlobalStyle.css";
import {ReactComponent as SnowFlower} from "../assets/image/empty_snowflower.svg";
import SmallGoalsTable from "../components/SmallGoalsTable";
import FlowerChart from "../components/FlowerChart";
import snowPng from "../assets/image/ion_snow-sharp.png";

const data = [
  {name:"1", value:9},
  {name:"2", value:9},
  {name:"3", value:4},
  {name:"4", value:2},
  {name:"5", value:9},
  {name:"6", value:9},
];

function ShowFlowerPage() {
  return (
    <div id="showFlowerPage">
      <div className='pageTitle'>
        <p id="title">나여이의 눈꽃</p>
        <p id="day">DAY 7</p>
      </div>
      <div id="snowflower">
        <FlowerChart id="chart" data={data} width={243} height={243}/>
        <div id="charWrapper">        
        </div>
        <SnowFlower id="flowerOutline"/>
      </div>
      <h2 id="bGoal">10kg 감량하기</h2>
      <SmallGoalsTable/>
    </div>
  );
}

export default ShowFlowerPage;
