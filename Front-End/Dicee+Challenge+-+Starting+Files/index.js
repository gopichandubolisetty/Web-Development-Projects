var rN1 = (Math.floor(Math.random()*5))+1;
var rN2 = (Math.floor(Math.random()*5))+1;
var change1 = "images/dice"+rN1+".png";
var change2 = "images/dice"+rN2+".png";
if(rN1>rN2){
    document.querySelector("h1").textContent="Player1 Won";
}else if(rN2>rN1){
    document.querySelector("h1").textContent="Player2 Won";
}else{
    document.querySelector("h1").textContent="It's a Draw";
}
document.querySelectorAll("img")[0].setAttribute("src",change1);
document.querySelectorAll("img")[1].setAttribute("src",change2);
