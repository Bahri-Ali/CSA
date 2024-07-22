import Absection from './aboutSection.jsx'
const title = ["السنة الاولى من تخصص","السنة الثانية من التخصص","السنة الثالثة من تخصص"]
const para=[
    "في السنة الأولى من التخصص يدرس الطالب جذع مشترك اعلام الي و رياضيات بإضافة الى جذع مشترك علوم و تكنلولجيا يكون نمط الدراسة هجين بين الحصص الحضورية و آخرى تدرس عن بعد حيث يدرس طالب المواد التالية",
    "في السنة الثانية يتخصص الطالب في اعلام الألي و الية بحيث يدرس مواد لها علاقة بتخصصين اكثر من السنة الاولى و بنفس طريقة حيث يدرس يوم حضوري و آخر عن بعد و تحتوي السنة الثانية على المواد التالية",
    "في السنة الثالثة يوجه طالب الى دراسة مواد لها علاقة بتخصصين بحيث يستعمل الاعلام الألي في الالية و هي سنة موجه لدراسة علم روبوتيك و ذكاء الاصطناعي بشكل اكبر"
]
const path = '../../public/Canevas-hybride_informatique_automatique_last.pdf'
function About(){
    return(
        <div className="about_continer">
            <Absection t={title[0]} p={para[0]}></Absection>
            <Absection t={title[1]} p={para[0]}></Absection>
            <Absection t={title[2]} p={para[0]}></Absection>
            <h1 className='about_info'>في نهاية ثلاث سنوات الاولى يتحصل الطالب على شهادتين اولى في الاعلام الألي و ثانية في الالية مما يتيح له فرص اكبر في ايجاب وظيفة او عمل الحر</h1>
            <div className='about_program'><h1>لتحميل برنامج ثلاث سنوات الاولى من هاذا الرابط</h1></div>
            <div className='about_button'><a href="../../public/pdf.pdf" download='../../public/pdf.pdf'><button>تحميل</button></a></div>
        </div>
    )
}
export default About 