import React from "react";
import { useNavigate, Outlet } from "react-router-dom";
import "./SnowFlowerPage.css";

 const StoragePage = ()=>{
    const navigate = useNavigate();
    
    return (
    <div className="StoragePage">
        <h2>목표</h2>
        <h2>완성된 눈송이</h2>
        <button onClick={() => navigate("SnowFlowerPage")}>SnowFlowerPage</button>
        <Outlet/>
    </div>
    )
};

export default StoragePage;