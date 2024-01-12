import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import exitButton from "../assets/image/exitButton.svg";
import '../styels/SmallGoalPage.css';

function SGoal() {
    const [subGoal1, setSubGoal1] = useState("");
    const [subGoal2, setSubGoal2] = useState("");
    const [subGoal3, setSubGoal3] = useState("");
    const [subGoal4, setSubGoal4] = useState("");
    const [subGoal5, setSubGoal5] = useState("");
    const [subGoal6, setSubGoal6] = useState("");
    const handleChangeSGoal1 = (e) => {
        setSubGoal1(e.target.value);
    };
    const handleChangeSGoal2 = (e) => {
        setSubGoal2(e.target.value);
    };
    const  handleChangeSGoal3 = (e) => {
        setSubGoal3(e.target.value);
    };
    const handleChangeSGoal4 = (e) => {
        setSubGoal4(e.target.value);
    };
    const handleChangeSGoal5 = (e) => {
        setSubGoal5(e.target.value);
    };
    const handleChangeSGoal6 = (e) => {
        setSubGoal6(e.target.value);
    };
    const navigate = useNavigate();
    const goshowFlowerPage = () => {
        navigate(('/'));
    }
    return (
    <>
    <div id="SGoal">
        <div className="SGoal1">
            <textarea id="1" value={subGoal1} onChange={handleChangeSGoal1}>{subGoal1}</textarea>
            <button className="exition1" onClick={() => setSubGoal1('')}>
                <img className="exitButton1" src={exitButton} alt="exitButton1"/>
            </button>
        </div>
        <div className="SGoal2">
            <textarea id="2" value={subGoal2} onChange={handleChangeSGoal2}>{subGoal2}</textarea>
            <button className="exition2" onClick={() => setSubGoal2('')}>
                <img className="exitButton2" src={exitButton} alt="exitButton2"/>
            </button>
        </div>
        <div className="SGoal3">
            <textarea id="3" value={subGoal3} onChange={handleChangeSGoal3}>{subGoal3}</textarea>
            <button className="exition3" onClick={() => setSubGoal3('')}>
                <img className="exitButton3" src={exitButton} alt="exitButton3"/>
            </button>
        </div>
        <div className="SGoal4">
            <textarea id="4" value={subGoal4} onChange={handleChangeSGoal4}>{subGoal4}</textarea>
            <button className="exition4" onClick={() => setSubGoal4('')}>
                <img className="exitButton4" src={exitButton} alt="exitButton4"/>
            </button>
        </div>
        <div className="SGoal5">
            <textarea id="5" value={subGoal5} onChange={handleChangeSGoal5}>{subGoal5}</textarea>
            <button className="exition5" onClick={() => setSubGoal5('')}>
                <img className="exitButton5" src={exitButton} alt="exitButton5"/>
            </button>
        </div>
        <div className="SGoal6">
            <textarea id="6" value={subGoal6} onChange={handleChangeSGoal6}>{subGoal6}</textarea>
            <button className="exition6" onClick={() => setSubGoal6('')}>
                <img className="exitButton6" src={exitButton} alt="exitButton6"/>
            </button>
        </div>
        <button className="completeButton" onClick={goshowFlowerPage}>완료</button>
    </div></>
    );
}

export default SGoal;