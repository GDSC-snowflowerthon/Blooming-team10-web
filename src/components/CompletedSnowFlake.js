import React from 'react';
import '../styels/StoragePage.css';

function SnowFlower() {
    const thisBGoal = "안녕";
    const completedTime = "2024/01/13";
    return (
        <>
        <div className="SFlake">
            <div className="SnowFlower">
                <p className="thisBGoal">{thisBGoal}</p>
                <p className="completedTime">{completedTime}</p>
            </div>
            <div className="SnowFlower">
                <p className="thisBGoal">{thisBGoal}</p>
                <p className="completedTime">{completedTime}</p>
            </div>
            <div className="SnowFlower">
                <p className="thisBGoal">{thisBGoal}</p>
                <p className="completedTime">{completedTime}</p>
            </div>
            <div className="SnowFlower">
                <p className="thisBGoal">{thisBGoal}</p>
                <p className="completedTime">{completedTime}</p>
                </div>
            </div>
        </>
    );
}

export default SnowFlower;