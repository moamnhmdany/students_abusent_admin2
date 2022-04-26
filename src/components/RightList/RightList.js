import React from "react";
import "./RightList.css";
export const RightList = () => {
  return (
    <div className="j-list-container">
      <div className="j-list">
        <ul style={{ listStyle: "none" }}>
          <li>add student</li>
          <li>add Lecture</li>
          <li>add collage</li>
          <li>add department</li>
        </ul>
      </div>
    </div>
  );
};

export default RightList;
