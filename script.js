const date = document.querySelector("#date")
const time = document.querySelector("#time")

setInterval(()=>{
    let currentDateTime = new Date();
    time.innerHTML=currentDateTime.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true  // <-- this enables 12-hour format
    });
    date.innerHTML=currentDateTime.toLocaleDateString();
},1000)
