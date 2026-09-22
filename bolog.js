const msg = document.getElementById("msg");
document.getElementById("btn").addEventListener("click",
() => {
    msg.textContent ="Imo kong gipislit bastos";
});

const box = document.getElementById("box");
if(!box){
    console.error("Element with id 'box' wala nakit an");
}
if (box){
    document.getElementById("1btn").addEventListener("click",
        () => {
            box.style.backgroundColor = "crimson";
        });
    
}