import React from "react";
import loginImg from "../Assists/img/loginphoto.png";
const ActivitySign = (props) => {
  return (
    <section className="main-screen">
      <div className="container">
      <h1 style={{ paddingTop: "2%",fontSize:"29px" }} className="section-main-header">
      التقديم في النشاط
          </h1>
          <p className="section-content" style={{margin:'0',padding:"0"}}>يرجى ملئ البيانات</p>
        <div
          className="d-flex justify-content-between "
          style={{ padding: "6% 0" }}
        >
          
          <div className="col-6">
            <form action="" className="login-form">
              <input type="text" placeholder="الإسم بالكامل " />
              <input type="text" placeholder="الفرقة " />
              <input type="text" placeholder="القسم " />
              <textarea type="text" placeholder="ما دورك ومواصفات لهذا النشاط" style={{height:"200px",borderRadius:"30px"}} />
              <button type="submit">اشتراك الآن </button>
              
            </form>
          </div>
          <div className="col-6" style={{ overflow: "hidden" }}>
            <img src={loginImg} style={{ width: "100%" }} alt="" />
          </div>
        </div>
    
      </div>
    </section>
  );
};

export default ActivitySign;
