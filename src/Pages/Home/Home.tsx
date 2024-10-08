import React from 'react';
import {useNavigate} from 'react-router-dom'

function Home() {
    const navigate = useNavigate()
    const style = {
        cursor: "pointer"
    }
    return (
        <div onClick={() => navigate("/") } style={style}>Index</div>
    );
}

export default Home;
