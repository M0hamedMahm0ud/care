import React from "react";
import { Link } from "react-router-dom";
import mainImg from "../Assists/img/loginphoto.png";

const Achevment = (props) => {
  return (
    <section className="main-screen" style={{ padding: "73px 0" }}>
      <div className="container">
        <h1
          className="section-main-header"
          style={{ fontWeight: "700", fontSize: "32px" }}
        >
          حققت كلية الحاسبات والمعلومات بجامعة المنصورة الكثير من الإنجازات
        </h1>
        <div className="landing__screen d-flex justify-content-between ">
          <div className="text col-6">
            <p className="" style={{ fontWeight: "700" }}>
              إنجازات رعاية الشباب
            </p>
            <div className="d-flex flex-column">
              <Link to={"/achone"} style={{ color: "white" }}>
                الفصل الدراسي الأول للعام الجامعي 2021/2022
              </Link>
              <Link to="/mainach" style={{ color: "white" }}>
                الفصل الدراسي الثاني للعام الجامعي 2021/2022
              </Link>
              <Link style={{ color: "white" }}>
                الفصل الدراسي الأول للعام الجامعي 2020/2021
              </Link>
              <Link style={{ color: "white" }}>
                الفصل الدراسي الأول للعام الجامعي 2019/2020
              </Link>
              <Link style={{ color: "white" }}>
                الفصل الدراسي الثاني للعام الجامعي 2018/2019
              </Link>
              <Link style={{ color: "white" }}>
                الفصل الدراسي الأول للعام الجامعي 2018/2019
              </Link>
              <Link style={{ color: "white" }}>
                الفصل الدراسي الأول للعام الجامعي 2015/2016
              </Link>
              <Link style={{ color: "white" }}>
                إنجازات رعاية الشباب   للعام الجامعي 2015
              </Link>
            </div>
          </div>
          <div className="figure__holder col-6">
            <img src={mainImg} style={{ width: "100%" }} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achevment;
