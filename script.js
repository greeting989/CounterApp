let num = document.querySelector('.num').textContent;
console.log(num);
let inc = document.querySelector('.inc');
let dec = document.querySelector('.dec');

//eventlistener

inc.addEventListener("click",function(e){

        e.preventDefault();
        num++;
        document.querySelector('.num').textContent = num;
    
   
});

dec.addEventListener("click",function(e){
    if(num==10){
        return -1;
    }else{
        e.preventDefault();
        num--;
        document.querySelector('.num').textContent = num;
    }
    
})
