let hd=document.querySelector("header");
// hd.style.textAlign="center";
// hd.style.color="red";

url="https://newsapi.org/v2/everything?q=apple&from=2024-01-11&to=2024-01-11&sortBy=popularity&apiKey=8767f01864604ccfb8fafede3e70ae0a"

// let li = document.querySelectorAll(".o");
// li.forEach((a)=>{
//     a.addEventListener("click",()=>{
//         alert("presss chesaduu")
//     })
//     });
randomm=(ram)=>{
    return Math.floor(Math.random()*99);
}
let  li= document.querySelectorAll(".o");
li.forEach((a)=>{
    a.addEventListener("click", async ()=>{
        let ram=randomm();
        let prom= await fetch(url);
        let data=await prom.json();
       var okok= data.articles[ram].title
       a.innerHTML=okok;}
)}
    );
// })
// const fun=async ()=>{
//     let ram=randomm();
//     let prom= await fetch(url);
//     let data=await prom.json();
//    var okok= data.articles[ram].title
//    a.innerHTML=okok;
//     // console.log();
    
// }
// fun();



// fun();


// let  li= document.querySelectorAll(".o");
// li.forEach((a)=>{
//     a.addEventListener("click",()=>{
//     // alert("ok bye")
//     a.innerHTML=data.articles[ram].title;
// }
// );
// })







