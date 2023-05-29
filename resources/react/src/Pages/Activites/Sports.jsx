import Footer from "../../Components/Footer"

const Sports = ()=>{
    const sportsData = ["تنس الطاوله", "تنس أرضي","ملاكمه","مصارعه","كره قدم","كاراتيه","كره طائره","كرة سله","كره يد ","ألعاب القوي"]
    return <section className="main-screen" style={{paddingTop:"100px"}}>
        <div className="container">
        <h1 className="section-main-header">إداره النشاط الرياضي</h1>
        <p className="section-content">تختص بتنظيم وتشجيع ممارسة الياضة وتكوين الفرق الرياضية واقامة المباريات والمسابقات الرياضية بهدف تنمية المواهب الرياضية وتهدف الي رعايةالطلاب الموهوبين رياضيا رفع مستوي التدريب علي الانشطة الرياضية تشجيع الطلاب ذوي الاحتياجات الخاصةفي مسابقات العاب القوي المشروع الصيفي "الرياضة للجميع" في كافة الالعاب الفردية
</p>
        
        <h1 className="section-main-header">وتهدف إلي :</h1>
        <p className="section-content">1-رعاية الطلاب الموهبين رياضيا 2-رفع مستوى التدريب على الأنشطه الرياضية للارتقاء بمستوى الطلاب رياضيا من خلال مراكز التدريب المختلفه 3-تشجيع الطلاب ذوى الاحتياجات الخاصه في مسابقات العاب القوى ورفع الأثقال والأنشطة الخاصه بهم 4-المشروع الصيفى " الرياضة للجميع " في كافة الألعاب الفرديه والجماعية
</p>
<h1 className="section-main-header">وتقوم الإداره بالأنشه التاليه : </h1>
        <p className="section-content">1- أقامه دورات رياضية في الألعاب الجماعية على مستوى كليات الجامعة ومستوى الجامعات المصرية 2- دورى رياضى بين كليات الجامعة 3- لقاءات قمية متعددة على مستوى الجامعات في الأنشطة الرياضية المختلفة
</p>
<div style={{padding:"60px 0"}}>
    {sportsData.map((sport,i)=>{
        return <div  key={i} className="d-flex custom-btn justify-content-between" style={{maxWidth:"350px",color:"white",marginBottom:"15px"}}><p>{sport}</p><a href="/activitysign">تسجيل</a></div>
    })}
</div>
<Footer/>
        </div>
    </section>
}
export default Sports