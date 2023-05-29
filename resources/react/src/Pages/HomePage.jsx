import React from "react";
import { Link } from "react-router-dom";
import mainImg from "../Assists/img/loginphoto.png";
import Footer from "../Components/Footer";

const HomePage = (props) => {
  return (
    <section className="main-screen" style={{ padding: "73px 0" }}>
      <div className="container">
        <div className="landing__screen d-flex justify-content-between align-items-center">
          <div className="text col-6">
            <p className="text-center">
              رعايه الشباب <br /> كليه الحاسبات والمعلومات <br />
              بجامعه المنصورة
            </p>
            <p>
              تلعب الإدارة العامة لرعاية الشباب دورا بارزا فى بناء شخصية الطالب
              الجامعى بناءا متكاملا وذلك من خلال ممارسته لأوجه الأنشطة الطلابية
              التى تساهم فى إشباع ميوله ورغباته من خلال العديد من الأنشطة
              والخدمات المميزة لإستثمار طاقات ولإمكانيات الطلاب وإتاحة الفرصة
              أمامهم لإكتساب خبرات ومهارات جديدة ورفع المستوى البدنى والفكرى
              والوجدانى ويتم ذلك من خلال عدد من الوحدات والإدارات المتخصصة{" "}
            </p>
            <div className="d-flex">
              <div className="custom-btn">
                <Link to="/activities">عرض الأنشطه</Link>
              </div>
              <div className="custom-btn white">
                <Link to="/mainach">الإنجازات</Link>
              </div>
            </div>
          </div>
          <div className="figure__holder col-6">
            <img src={mainImg} style={{ width: "100%" }} alt="" />
          </div>
        </div>
        <Footer/>
      </div>

    </section>
  );
};

export default HomePage;
