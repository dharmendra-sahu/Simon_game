gameseq= [];
userseq= [];
let btnss =["yellow", "red","green" ,"purple"];
let h3 =document.querySelector("h3");
let level =0;
let starts =false;
document.addEventListener("keypress", function(){
    if(starts== false){
        console.log("game started")
        starts=true;
    }
    levelup();
});
function btnflash(btn){
    btn.classList.add("flash")
    setTimeout(function(){
        btn.classList.remove("flash")
    }, 250);
}
function levelup(){
    userseq =[];
    level++;
    h3.innerText = `Level ${level}`;
    let ranidx = Math.floor(Math.random()*3);
    let randcolor =btnss[ranidx];
    randbtn = document.querySelector(`.${randcolor}`);
    gameseq.push(randcolor);
    console.log(gameseq)
    btnflash(randbtn);
}
function checkans(idx){
    // console.log("curren level" , level);
    if(userseq[idx] === gameseq[idx]){
        if(userseq.length == gameseq.length){
            setTimeout(levelup, 1000);
        }
    }
    else{
        h3.innerHTML =`Game Over! Your score was <b>${level}</b> press any keyto Restart the game`;
        document.querySelector("body").style.color = "red";
        setTimeout(() => {
            document.querySelector("body").style.color = "green";
        },200);
        reset();
    }
}
function btnpress(){
    let btn =this;
    btnflash(btn);
  let   usercolor =btn.getAttribute("id");
    userseq.push(usercolor);
    console.log(userseq);
    checkans(userseq.length-1);
}
let allbtn =document.querySelectorAll(".btn");
for(btns of allbtn){
    btns.addEventListener("click", btnpress)
}
function reset(){
    starts =false;
    level=0;
    gameseq=[];
    userseq=[];
}