const date = document.querySelector("#date")
const time = document.querySelector("#time")

setInterval(()=>{
    let currentDateTime = new Date();
    time.innerHTML=currentDateTime.toLocaleTimeString();
    date.innerHTML=currentDateTime.toLocaleDateString();
},1000)
