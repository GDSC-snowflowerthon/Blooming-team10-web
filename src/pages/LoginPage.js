import "../styels/SignupPage.css";
import "../styels/LoginPage.css";
import React, { useState } from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";

function LoginPage () {

    const [id, setId] = useState("");
    const [pw, setPw] = useState("");

    const navigate = useNavigate();
    
    const onIdHandler = (event) => {
        setId(event.currentTarget.value);
    }
    const onPwHandler = (event) => {
        setPw(event.currentTarget.value);
    }

    function onSubmitHandler(event) {
        event.preventDefault();
        checkUser();
    }



    const checkUser = async (e) => {
        const url = "http://15.165.203.215:8080";
        const api = "/user/login";

        await axios.post(url+api, {
            loginId : id,
            password : pw
        }, {withCredentials:true}).then((res) => {
            if (res.data.code === 200) {
                console.log(res.data.result);
                console.log("from login");
                console.log(res.data.result.hasGoal);
                console.log(res.data.result.activeGoalId);
                if (!res.data.hasGoal) {
                    navigate("/big", {state:res.data.result});
                }
                if (res.data.result.activeGoalId > 0) {
                    navigate("/", {state:res.data.result});
                } 
            } else if (res.data.code === 400) {
                console.log(res.data.code);
                /*setPopup({
                    open:true,
                    title:"Fail",
                    message: res.data.message
                });*/
            }
        }).catch((err)=>{
            console.log(err);
        }) 
    }
    

    return (
        <div className="ComponentsClass" id="formWrapper">
            <form id="form" onSubmit={onSubmitHandler}>
                <label>아이디</label>
                <input type="text" value={id} onChange={onIdHandler}/>
                <label>비밀번호</label>
                <input type="password" value={pw} onChange={onPwHandler}/>
                <div id="reqSignup">회원이 아니신가요? <a id="aForSignup"onClick={() => navigate("/signup")}>회원가입</a></div>
                <br/>
                <div id="buttonWrapper"><button id="formButton">로그인</button></div>
            </form>

        </div>
    );
}

export default LoginPage;