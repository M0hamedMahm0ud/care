import React from "react";
import Footer from "../../Components/Footer";
const MainAch = (props) => {
  return (
    <section className="main-screen" style={{ padding: "73px 0" }}>
      <div className="container">
        <h1
          className="section-main-header"
          style={{ fontWeight: "700", fontSize: "24px" }}
        >
         التي تم تحقيقها للعام الجامعى 2021/2022 بقسم رعاية الطلاب
        </h1>
        <div className="landing__screen d-flex justify-content-between " style={{padding:"2% 0"}}>
          <div className="text" style={{width:"67%"}}>
            <p className="" style={{ fontWeight: "600",fontSize:"24px" }}>
                 أولا:- في مجال الأنشطة الرياضية     &nbsp;&nbsp;  &nbsp;   الألعاب الجماعيه</p>
         
           <div className="d-flex flex-column">
              <p  style={{ fontWeight: "700", fontSize: "24px" }}> كرة السله ( طلبه )</p>
              <p>الحصول على المركز الاول على مستوى الجامعه فى كرة السله ( طلبه ) خلال اسبوع التميز بالتعاون  مع وزارة الشباب والرياضيه</p>
              <p style={{ fontWeight: "700", fontSize: "24px" }}
> كرة السله ( طالبات )
</p>
              <p>الحصول على المركز الثانى على مستوى الجامعه فى دورى الجامعه لكرة السله ( طالبات )
</p>
              <p>الحصول على المركز الثانى فى كرة السله ( طالبات ) خلال اسبوع التميز بالتعاون مع وزاره الشباب والرياضيه</p>
              <p style={{ fontWeight: "700", fontSize: "24px" }}
>  الألعاب الفرديه
</p>
<p style={{ fontWeight: "700", fontSize: "24px" }}
> العاب القوى  
</p>
              <p>الحصول على المركز الاول فى سباق 100م عدو خلال اسبوع التميز بالتعاون مع وزاره الشباب والرياضيه</p>
              </div>
              
          <p className="d-flex justify-content-between" style={{width:"70%"}}><span> الطالب / عبد الله  محمد عبد الحميد    </span>                   <span> ( الفرقه الرابعه )</span></p>
         
          </div>
          
        
        </div>
        <Footer/>
      </div>
    </section>
  );
};

export default MainAch;
