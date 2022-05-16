import React from "react";
export default function Header() {
  return (
    <div className="header d-flex">
      <div className="left-header">
        <div className="display-1">
          <p className="hello">Hello!</p>
          I'm Abdulkarim Alarmanazi
        </div>
        <p className="defaulFont display-4">Fullstack web developer</p>
        <h4 className="defaulFont">
          <p>
            Passionate developer led by curiosity to learn and face new
            challenges.
          </p>
          <p>Finding joy in solving problems while working in a team.</p>
        </h4>
      </div>
      <div className="right-header">
          <img src="https://avatars.githubusercontent.com/u/23372891?v=4" />
      </div>
    </div>
  );
}
