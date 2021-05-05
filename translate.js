// var arabic=document.getElementById("arabic");
// var english=document.getElementById("english");
// var title= document.getElementById("title");


// arabic.onclick=()=>{
//     setlang("arabic");
//     localStorage.setItem("lang","arabic");
// }
// english.onclick=()=>{
//     setlang("english");
//     localStorage.setItem("lang","english");
// }

// onload=()=>{
//    setlang(localStorage.getItem("lang"));
    
// }


// function setlang(set){
//     if(set=="arabic"){
//         title.innerHTML="اهلا";
//     }else if(set=="english"){
//         title.innerHTML="welcome";
//     }
// }
var arabic = document.getElementById("arabic");
var english = document.getElementById("english");
var title = document.getElementById("title");
var welcome = document.getElementById("welcome-text");
var about = document.getElementById("about");
var aboutText = document.getElementById("about-text");
var contact = document.getElementById("contact");

arabic.onclick = ()=>{
    setLanugage("arabic");
    localStorage.setItem("Lang","arabic");
};

english.onclick = ()=>{
    setLanugage("english");
    localStorage.setItem("Lang","english");
};

onload = ()=>{
    setLanugage(localStorage.getItem("Lang"));
};
function setLanugage(getLanuage){
if(getLanuage === "arabic"){
    title.innerHTML = "القدر الاسود";
    welcome.innerHTML = "مرحبا بكم  في صفحة القدر الاسود";
    about.innerHTML = "حولنا";
    aboutText.innerHTML = "انا استاذ برمجيات و مهندس برمجيات";
    contact.innerHTML = "اتصل بنا";
}else if(getLanuage ==="english"){
    title.innerHTML = "The Black Pot";
    welcome.innerHTML = "Welcome to website of The Black Pot";
    about.innerHTML = "  About US";
    aboutText.innerHTML = "  I am a teacher and a Software Developer";
    contact.innerHTML = "Contact us";}}
