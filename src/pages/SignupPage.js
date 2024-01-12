import "../styels/SignupPage.css";
import React, { useState } from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";

function SignupPage () {

    const [nickname, setNickname] = useState("");
    const [id, setId] = useState("");
    const [pw, setPw] = useState("");

    const navigate = useNavigate();
    
    const onNicknameHandler = (event) => {
        setNickname(event.currentTarget.value);
    }
    const onIdHandler = (event) => {
        setId(event.currentTarget.value);
    }
    const onPwHandler = (event) => {
        setPw(event.currentTarget.value);
    }

    function onSubmitHandler(event) {
        event.preventDefault();
        sendRegisterInfo();
    }



    const sendRegisterInfo = async() => {
        const url = "http://15.165.203.215:8080";
        await axios.post( url+"/user/signup", {
            loginId : id,
            nickname : nickname,
            password : pw
        }, {withCredentials:true}
        ).then((res) => {
            if(res.data.code === 200){
                console.log(res.data.code);
                navigate("/login");
                /*setPopup({
                    open:true,
                    title:"Success",
                    message : res.data.message,
                    callback : () => {
                        navigate("/login");
                    }
                });*/
            } else if (res.data.code === 400) {
                console.log(res.data.code);
                /*setPopup({
                    open:true,
                    title:"Fail",
                    message: res.data.message
                });*/
            }
        }
        ).catch((err) => {
            console.log(err);
        });
    
    }

    

    return (
        <div className="ComponentsClass" id="formWrapper">
            <form id="form" onSubmit={onSubmitHandler}>
                <label>닉네임*</label>
                <input placeholder="4~10자 영문, 한글, 숫자 조합"
                type="text" value={nickname} onChange={onNicknameHandler}/>
                <label>아이디*</label>
                <input placeholder="4~10자 영어 소문자, 숫자 조합"
                type="text" value={id} onChange={onIdHandler}/>
                <label>비밀번호*</label>
                <input placeholder="8자 이상의 영문, 숫자 조합"
                type="password" value={pw} onChange={onPwHandler}/>
                <br/>
                <div id="buttonWrapper"><button id="formButton">회원가입</button></div>
            </form>

        </div>
    );
}

export default SignupPage;