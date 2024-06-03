let emoji=document.querySelectorAll(".emoji");
let array = Array.from(emoji);
for(let i=0;i<array.length;i++){
    addEventListener("click",function(){
        let select = array[i].innerText;
        console.log(select);
    })
}

