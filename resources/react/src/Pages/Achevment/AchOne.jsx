import React from "react";
import Footer from "../../Components/Footer";
const AchOne = (props) => {
  return (
    <section className="main-screen" style={{ padding: "73px 0" }}>
      <div className="container">
        <h1
          className="section-main-header"
          style={{ fontWeight: "700", fontSize: "24px" }}
        >
         الأنشطه  التي تم تنفيذها والإنجازات التي تم حقيقها للعام الجامعى 2021/2022 بقسم رعايه الطلاب
        </h1>
        <div className="landing__screen d-flex justify-content-between " style={{padding:"2% 0"}}>
          <div className="text" style={{width:"67%"}}>
            <p className="" style={{ fontWeight: "600",fontSize:"24px" }}>
            أولا:- في مجال الأنشطة            </p>
            <p className="" style={{ fontWeight: "600",fontSize:"24px" }}>
            " اللجنــــــــة الرياضـــــــــــية "       </p>
           <div className="d-flex justify-content-between">
           <div className="d-flex flex-column">
              <p> م -النشاط الذي تم تنفيذه</p>
              <p>1- المشاركه فى دورى الجامعه فى كرة الطائرة</p>
              <p>1- المشاركه فى دورى الجامعه فى كرة الطائرة</p>
              <p>1- المشاركه فى دورى الجامعه فى كرة الطائرة</p>
              <p>1- المشاركه فى دورى الجامعه فى كرة الطائرة</p>
              <p>1- المشاركه فى دورى الجامعه فى كرة الطائرة</p>
              </div>
              <div className="d-flex flex-column">
               <p> عدد المشاركين &nbsp; &nbsp; &nbsp;  فتره التنفيذ</p>
               <p className="d-flex justify-content-between"><span>8 طالب </span><span style={{marginLeft:"40px"}}>مارس 2022  </span></p>
               <p className="d-flex justify-content-between"><span>8 طالب </span><span style={{marginLeft:"40px"}}>مارس 2022  </span></p>
               <p className="d-flex justify-content-between"><span>8 طالب </span><span style={{marginLeft:"40px"}}>مارس 2022  </span></p>
               <p className="d-flex justify-content-between"><span>8 طالب </span><span style={{marginLeft:"40px"}}>مارس 2022  </span></p>
               <p className="d-flex justify-content-between"><span>8 طالب </span><span style={{marginLeft:"40px"}}>مارس 2022  </span></p>

              </div>
           </div>
          </div>
         
        </div>
        <Footer/>
      </div>
    </section>
  );
};

export default AchOne;
