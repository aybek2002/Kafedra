let joqariga = document.querySelector(".joqariga"),
    tomenge = document.querySelector(".tomenge"),
    suwret = document.querySelector(".suwret");

tomenge.addEventListener("click",function(){
    suwret.scroll(0,600);
})
joqariga.addEventListener("click",function(){
    suwret.scroll(0,-500);
})