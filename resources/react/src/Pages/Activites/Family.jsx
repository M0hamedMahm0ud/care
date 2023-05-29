import Footer from "../../Components/Footer"

const Family = ()=>{
    return <section className="main-screen" style={{paddingTop:"100px"}}>
        <div className="container">
        <h1 className="section-main-header">إدارة الأسر الطلابية  </h1>
        <p className="section-content"> 
        تختص بتشجيع تكوين الأسر الطلابية و دعم نشاطها في كافة المجالات و التنسيق فيما بينها
توثيق العلاقات بين الطلاب
زيادة التفاعل بين الطلاب و استثمار مهاراتهم في أنشطة متميزة . 
زيادة الوعي الديني والثقافي و السياسي للشباب .
إعداد وتثقيف الفتاه الجامعية سياسيا واقتصاديا و اجتماعيا و قانونیا و دينيا . 
رفع مستوي التفكير و تنمية المهارات القيادية للطلاب .
إقامة العديد من البرامج والمسابقات و الأنشطة والتي تتمثل في الآتي
أنشطة رياضية                      أنشطة بينية
أنشطة ثقافية                      أنشطة فنية
أنشطة اجتماعية                 قوافل طيبة متكاملة
رحلات ومعسكرات               برامج محو الأمية

        </p>
        

<div style={{padding:"60px 0"}}>
 
<div   className="d-flex custom-btn justify-content-between" style={{maxWidth:"350px",color:"white",marginBottom:"15px"}}><a href="/activitysign">تسجيل</a></div>
   
</div>
<Footer/>
        </div>
    </section>
}
export default Family