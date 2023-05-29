import React from "react";
import Activity from "../Components/Activity";
import Footer from "../Components/Footer";
const Activities = (props) => {
  return (
    <section className="main-screen">
      <div className="container">
        <div>
          <h1 style={{ paddingTop: "6%" }} className="section-main-header">
            الرؤيه والرساله والأهداف الخاصه برعايه الطلاب
          </h1>
          <p style={{ color: "white", width: "60%" }}>
            تلعب الإدارة العامة لرعاية الشباب دورا بارزا فى بناء شخصية الطالب
            الجامعى بناءا متكاملا وذلك من خلال ممارسته لأوجه الأنشطة الطلابية
            التى تسهم فى إشباع ميوله ورغباته من خلال العديد من الأنشطة والخدمات
            المميزة لإستثمار طاقات ولإمكانيات الطلاب وإتاحة الفرصة أمامهم
            لإكتساب خبرات ومهارات جديدة ورفع المستوى البدنى والفكرى والوجدانى
            ويتم ذلك من خلال عدد من الوحدات والإدارات المتخصصة{" "}
          </p>
        </div>
        <div>
          <h1 style={{ paddingTop: "6%" }} className="section-main-header">
            أهم نشاطات رعاية الطلاب
          </h1>
          <Activity
          href="/sports"
            showmore="true"
            header="النشاط الرياضي"
            content="تختص بتنظيم وتشجيع ممارسة الياضة وتكوين الفرق الرياضية واقامة المباريات
والمسابقات الرياضية بهدف تنمية المواهب الرياضية "
          />
          <Activity
          href="/cultural"
            showmore="true"
            header="إدارة النشاط الثقافي"
            content="تختص بتنظيم أوجه النشاط الثقافي وتنمية الوعي بقضايا الوطن بما يرسخ مفاهيم الديمقراطية
            ونشر ثقافة حقوق الانسان والمشاركة المجتمعية والعمل العام وتنمية طاقات الطلاب الإبداعية والثقافية والإعلامية"
          />
          <Activity
          href="/family"
            showmore="true"
            header="إدارة الأسر الطلابية"
            content="تختص بتشجيع تكوين الأسر الطلابية و دعم نشاطها في كافة المجالات و التنسيق فيما بينها "
          />
          <Activity
          href="/rangers"
            showmore="true"
            header="إدارة الجوالة والخدمة العامة"
            content="تختص بدعم الحركة الكشفية والمشاركة في مشروعات الخدمة العامة وتنفيذ برامجها لخدمة البيئة والمجتمع"
          />
          <Activity
          href="/practical"
            showmore="true"
            header="النشاط العملى والتكنولوجى"
            content="يختص بعقد ندوات ومحاضرات علمية بهدف تنمية القدرات العلمية و التكنولوجية
            و نشر المعرفة إنتاجا و تطبيقا عن طريق نوادي العلوم و الجمعيات العلمية"
          />
        </div>
        <Footer/>
      </div>
    </section>
  );
};

export default Activities;
