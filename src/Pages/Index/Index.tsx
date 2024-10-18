import React from 'react';
import {Link, useParams} from "react-router-dom";
import {Transition} from "react-transition-group";
import {TransitionDemo} from "../demo/transition/transition";
import {CssTransitionDemo} from "../demo/cssTransition/cssTransition";
import {SwitchTransitionDemo} from "../demo/switchTransition/switchTransition";
import {TransitionGroupDemo} from "../demo/transitionGroup/transitionGroup";

function Index() {
    const {id} = useParams();
    a

    return (
        <div>
            <Link to={`/home`}>Home</Link>
            <div className="demo-box">
                <h2>Transition-Demo</h2>
                <TransitionDemo></TransitionDemo>
            </div>

            <div className="demo-box">
                <h2>CssTransition-Demo</h2>
                <CssTransitionDemo></CssTransitionDemo>
            </div>

            <div className="demo-box">
                <h2>SwitchTransition-Demo</h2>
                <SwitchTransitionDemo></SwitchTransitionDemo>
            </div>

            <div className="demo-box">
                <h2>TransitionGroup-Demo</h2>
                <TransitionGroupDemo></TransitionGroupDemo>
            </div>
        </div>
    );
}

export default Index;
