// slider

let slides=document.querySelectorAll(".slide")

let index=0

function slider(){

slides.forEach(s=>s.classList.remove("active"))

slides[index].classList.add("active")

index++

if(index===slides.length){

index=0

}

}

setInterval(slider,3000)


// counter animation

let counters=document.querySelectorAll(".counter")

counters.forEach(counter=>{

let target=counter.dataset.target

let count=0

function update(){

count++

counter.innerText=count

if(count<target){

requestAnimationFrame(update)

}

}

update()

})


// popup form

let popup=document.getElementById("popup")

document.getElementById("applyBtn").onclick=function(){

popup.style.display="block"

}

document.getElementById("closePopup").onclick=function(){

popup.style.display="none"

}
