import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Login from "./Login";
import RedirectionButton from "../components/redirection Button";

function Homepage() {
    return (
        <div>Homepage
            <div id=""><RedirectionButton ruta="/user/new" texto="registrate" /></div>
           
            <Login />
        </div>
        
    );
}

export default Homepage;

