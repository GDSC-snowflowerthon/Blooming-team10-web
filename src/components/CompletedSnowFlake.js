import React from 'react';
<<<<<<< HEAD
=======
import SnowFlower4 from "../components/SnowFlower4";
>>>>>>> dd628cdca7d854f839980fa206b28ef5ad25bdc1
import '../styels/StoragePage.css';

function SnowFlower() {
    const data1 = [
        {goalName : "모두 행복하기"},
        {goalId : "1"},
        {goalCreateDate : "2024-01-08T06:12:04.325+00:00"},
        {subgoalList : [  
          {subgoalId:"1", subgoalName : "물 1L 마시기", doneDateList:["24-01-11","24-01-11","24-01-11","24-01-11","24-01-11","24-01-11","24-01-11","24-01-11","24-01-11", "24-01-11"]},
          {subgoalId:"2", subgoalName : "물 2L 마시기", doneDateList:["24-01-11","24-01-11","24-01-11","24-01-11","24-01-11","24-01-11","24-01-11","24-01-11","24-01-11", "24-01-11"]},
          {subgoalId:"3", subgoalName : "물 3L 마시기", doneDateList:["24-01-11","24-01-11","24-01-11","24-01-11","24-01-11","24-01-11","24-01-11","24-01-11","24-01-11", "24-01-11"]},
          {subgoalId:"4", subgoalName : "물 4L 마시기", doneDateList:["24-01-11","24-01-11","24-01-11","24-01-11","24-01-11","24-01-11","24-01-11","24-01-11","24-01-11", "24-01-11"]},
          {subgoalId:"5", subgoalName : "물 5L 마시기", doneDateList:["24-01-11","24-01-11","24-01-11","24-01-11","24-01-11","24-01-11","24-01-11","24-01-11","24-01-11", "24-01-11"]},
          {subgoalId:"6", subgoalName : "물 6L 마시기", doneDateList:["24-01-11","24-01-11","24-01-11","24-01-11","24-01-11","24-01-11","24-01-11","24-01-11","24-01-11", "24-01-11"]}
        ]}
      ];
      const data2 = [
        {goalName : "건강하기"},
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
      const data3 = [
        {goalName : "all A+ 받기"},
        {goalId : "2"},
        {goalCreateDate : "2024-01-08T06:12:04.325+00:00"},
        {subgoalList : [  
          {subgoalId:"1", subgoalName : "물 1L 마시기", doneDateList:["24-01-11", "24-01-11", "24-01-11"]},
          {subgoalId:"2", subgoalName : "물 2L 마시기", doneDateList:["24-01-11","24-01-11","24-01-11","24-01-11"]},
          {subgoalId:"3", subgoalName : "물 3L 마시기", doneDateList:["24-01-11","24-01-11"]},
          {subgoalId:"4", subgoalName : "물 4L 마시기", doneDateList:["24-01-11","24-01-11"]},
          {subgoalId:"5", subgoalName : "물 5L 마시기", doneDateList:["24-01-11","24-01-11","24-01-11","24-01-11"]},
          {subgoalId:"6", subgoalName : "물 6L 마시기", doneDateList:["24-01-11","24-01-11","24-01-11","24-01-11","24-01-11","24-01-11"]}
        ]}
      ];
      const data4 = [
        {goalName : "알고리즘 천재되기"},
        {goalId : "2"},
        {goalCreateDate : "2024-01-08T06:12:04.325+00:00"},
        {subgoalList : [  
          {subgoalId:"1", subgoalName : "물 1L 마시기", doneDateList:["24-01-11","24-01-11","24-01-11","24-01-11","24-01-11","24-01-11","24-01-11","24-01-11","24-01-11", "24-01-11"]},
          {subgoalId:"2", subgoalName : "물 2L 마시기", doneDateList:["24-01-11","24-01-11","24-01-11","24-01-11","24-01-11","24-01-11","24-01-11","24-01-11","24-01-11", "24-01-11"]},
          {subgoalId:"3", subgoalName : "물 3L 마시기", doneDateList:["24-01-11","24-01-11","24-01-11","24-01-11","24-01-11","24-01-11","24-01-11","24-01-11","24-01-11", "24-01-11"]},
          {subgoalId:"4", subgoalName : "물 4L 마시기", doneDateList:["24-01-11","24-01-11","24-01-11","24-01-11","24-01-11","24-01-11","24-01-11","24-01-11","24-01-11", "24-01-11"]},
          {subgoalId:"5", subgoalName : "물 5L 마시기", doneDateList:["24-01-11","24-01-11","24-01-11","24-01-11","24-01-11","24-01-11","24-01-11","24-01-11","24-01-11", "24-01-11"]},
          {subgoalId:"6", subgoalName : "물 6L 마시기", doneDateList:["24-01-11","24-01-11","24-01-11","24-01-11","24-01-11","24-01-11","24-01-11","24-01-11","24-01-11", "24-01-11"]}
        ]}
      ];
    return (
        <>
        <div className="SFlake">
            <div className="SnowFlower">
            <div className="SnowFlake"><SnowFlower4 data={data1[3].subgoalList}/></div>
                <p className="thisBGoal">모두 행복하기</p>
                <p className="completedTime">2024-01-23</p>
            </div>
            <div className="SnowFlower">
                <div className="SnowFlake"><SnowFlower4 data={data2[3].subgoalList}/></div>
                <p className="thisBGoal">건강하기</p>
                <p className="completedTime">2024-02-05</p>
            </div>
            <div className="SnowFlower">
                <div className="SnowFlake"><SnowFlower4 data={data3[3].subgoalList}/></div>
                <p className="thisBGoal">all A+ 받기</p>
                <p className="completedTime">2024-06-23</p>
            </div>
            <div className="SnowFlower">
                <div className="SnowFlake"><SnowFlower4 data={data4[3].subgoalList}/></div>
                <p className="thisBGoal">알고리즘 천재되기</p>
                <p className="completedTime">2024-10-25</p>
                </div>
            </div>
        </>
    );
}

export default SnowFlower;