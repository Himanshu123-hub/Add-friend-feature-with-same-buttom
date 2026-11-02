let btn = document.querySelector("button")
let h2 = document.querySelector("h2")

let count = 0
btn.addEventListener("click",function(){
     if(count === 0){
            h2.innerHTML = "Friends"
    h2.style.color ="Green"
    btn.innerHTML = "Remove"
    count = 1
     }else{
        h2.style.color = "red"
        h2.innerHTML = "Strange"
        btn.innerHTML ="Add Friend"
        count = 0 
     }
})