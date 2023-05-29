import Footer from "../../Components/Footer"

const Practical = ()=>{
    return <section className="main-screen" style={{paddingTop:"100px"}}>
        <div className="container">
        <h1 className="section-main-header"> إدارة النشاط العملى والتكنولجى  </h1>
        <p className="section-content">يختص بعقد ندوات ومحاضرات علمية بهدف تنمية القدرات العلمية و التكنولوجية
و نشر المعرفة إنتاجا و تطبيقا عن طريق نوادي العلوم و الجمعيات العلمية ويهدف الى
دعم الطلاب ذوي العقول المبدعة بكافة الوسائل و تسهيل الحصول على برئات اختراع لأعمالهم
نشر الثقافة العلمية ورفع المستوي العلمي
العمل على خلق قيادات شبابية تساهم أفكارهم في خدمة المجتمع
تهيئة المناخ المناسب لكي يمارس الشباب نشاطات علمية حتي تكشف عن مواهبهم وتنمي ميولهم و قدراتهم
إتاحة الفرصة للطلاب للتعرف علي بياتهم و التعامل معها 
اكتشاف المهارات والمواهب العلمية عند الشباب
رفع شعار العلم للجميع عن طريق إصدار نشرات و کتیبات و مسابقات
المشاركة في المعارض واللقاءات العلمية 
تنمية القدرة علي التواصل وذلك بتبادل الأفكار بين طلاب الجامعة والجامعات المصرية الأخرى
</p>
        <h1 className="section-main-header">   مجالات النادي   </h1>
        <p className="section-content d-flex justify-content-between" style={{width:"50%"}}>
<p>لحاسب الآلي والبرمجيات و الانترنت <br />الميكانيكا والوسائل العلمية  <br />لمشاريع المنتجة الصغيرة   <br />علوم الفضاء والطيران  <br />علوم البيئة والكيمياء</p>
<p>الالكترونيات والميكاترونك <br />   الاختراعات والابتكارات
 <br /> الكهرباء <br /> الطاقة الشمسية والمتعددة <br />المكتبة السمعية والبصرية والمقروءة

</p>

</p>

<div style={{padding:"60px 0"}}>

       <div  className="d-flex custom-btn justify-content-between" style={{maxWidth:"350px",color:"white",marginBottom:"15px"}}><a href="/activitysign">تسجيل</a></div>
   
</div>
<Footer/>
        </div>
    </section>
}
export default Practical