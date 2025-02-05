// import QeR from "./QeR"
import './QeR.css'
import QeR from './QeR'
let Adress = "https://www.google.ca/maps/place/Block+H/@36.8127838,7.7182081,286m/data=!3m1!1e3!4m15!1m8!3m7!1s0x12f007bb034e7571:0x28fddce8b255b712!2sAnnaba!3b1!8m2!3d36.897375!4d7.7500122!16zL20vMDRtN2Zo!3m5!1s0x12f009de646e041d:0xf4ef3a016eb4a465!8m2!3d36.8127667!4d7.7189105!16s%2Fg%2F11smvpqspy?entry=ttu" 
function QER_HOME(){
    const Q =[
        "من نحن و ما هو هدف من موقع",
        "ماهو تخصص مزدوج اعلام الي و الية",
        "برنامج الدراسي خاص 3 بسنوات الأولى",
        "يمكنك الانضمام الى المحادثة عامة على موقع و وضع اي تساؤل",
        "نظام تشغيل الخاص بنا و اهميته",
        "مكان الدراسة في جامعة عنابة"
    ]
    const R =[
        'نحن طلاب تخصص مزدوج اعلام الي و الية هدف هذا موقع الاجابة على اسألة الطلبة',
        "هو تخصص جديد يهدف الى دراسة الاعلام الألي و الية في وقت واحد و هما تخصصان مندمجان في بعضهما و يمكنك تطوير نفسك فيهما في نفس وقت",
        "البرنامج الدراسي لطور ليسانس مليح بمواد تقنية يمكنك تحميله من هاته الصفحة",
        "في حال لديك اي سؤال يمكنك طرحه في المحادثة القائمة في موقع من هنا",
        "نظام تشغيل خاص بنا تم تطويره لمساعدة الطلبة في بداية مشوارهم التقني حيث يحتوي على جميع برامج التي يحتاجها يمكنك الاطلاع اكثر من هنا",
        "طلاب التخصص لا يدرسون مع طلبة اخارين و هاذا راجع لتنظيم الذي يخضعون عليهم مكان الدراسة في جامعة من للطلبة الجدد من هنا"
    ]
    return(
        <div className='Home_continer'>
            <div className='QER_HOME'>
                <QeR Q={Q[0] } R={R[0]} repons={false} id={1} L={null}/>
                <QeR Q={Q[1] } R={R[1]} repons={false} id={2} L={null}/>
                <QeR Q={Q[2] } R={R[2]} repons={false} id={3} L={'about'}/>
                <QeR Q={Q[3] } R={R[3]} repons={false} id={4} L={"chat"}/>
                <QeR Q={Q[4] } R={R[4]} repons={false} id={5} L={'linux.d'}/>
                <QeR Q={Q[5] } R={R[5]} repons={false} id={6} L={Adress}/>
            </div>
        </div>
    )
}
export default QER_HOME