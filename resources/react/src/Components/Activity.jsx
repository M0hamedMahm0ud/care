import React from "react";
import { Link } from "react-router-dom";
const mainTest = () => {
  return (
    <>
      <div className="custom-btn">
        <Link to="">اشترك في النشاط</Link>
      </div>
      <div className="custom-btn ">
        <Link to=""> عرض الانجازات </Link>
      </div>
    </>
  );
};
const Activity = (props) => {
  return (
    <div className="activity__holder d-flex justify-content-between align-items-center">
      <div className="col-8">
        <h1>{props.header}</h1>
        <p style={{ fontSize: "20px", width: "80%" }}>{props.content}</p>
      </div>
      <div className="d-flex col-4 justify-content-end">
        {props.showmore ? (
          <div className="custom-btn">
            <Link to={props.href} style={{ width: "170px", textAlign: "center" }}>
              عرض المزيد
            </Link>
          </div>
        ) : (
          mainTest()
        )}
      </div>
    </div>
  );
};

export default Activity;
