import React from "react";
import "./Header.css"
import avatar from "./images/profile.jpeg"

export default function Header() {
    return (
        <div className="Header">
            <div className="row">
                <div className="col-md-4 avatar">
                    <img src={avatar} height={500} width={500} />
                </div>
                <div className="col-md-8 title">
                    <h1><span className="name">Micah Tan Kelly</span>
                        <br />
                        aspiring Full-Stack Engineer
                    </h1>
                </div>
            </div>
        </div>
    )
}