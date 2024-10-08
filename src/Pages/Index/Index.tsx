import React from 'react';
import {Link, useParams} from "react-router-dom";

function Index() {
    const {id} = useParams();

    return (
        <div>
            <Link to={`/home`} >Home</Link>
        </div>
    );
}

export default Index;
