
window.onload = function(){

   var arr = document.getElementsByTagName("li");//获取li的数组
   var len = arr.length;
   var start = document.getElementById("start");
   var stop = document.getElementById("stop");
   var rm = document.getElementById("rm");
   var time = null;

 

 function sta(){

  start.style.background = "#FEA600";
  start.style.color = "white";

 };

 function star(){
   
   start.style.background = "white";
   start.style.color = "#FEA600";

 };

 start.onmouseover = function (){

   sta();

 };

 start.onmouseleave = function (){

   star();

 };

  function changeBg(){

   var a = Math.floor(Math.random()*255);
   var b = Math.floor(Math.random()*255);
   var c = Math.floor(Math.random()*255);
   var randomList = randomNum(arr);//返回li的随机数
   var num1 = 0;
   var num2 = 0;
   var num3 = 0;

    function randomNum(arr){

   return arr[Math.floor(Math.random()*len)];

  }
   function re(){
    num1 = Math.floor(Math.random()*len);
    num2 = Math.floor(Math.random()*len);
    num3 = Math.floor(Math.random()*len);
    if(num1 == num2 || num2 == num3 || num1 == num3){
      re();
    }

}
   re();
   console.log(num1 +''+num2+''+num3 );

 

     var c = ["rgb("+a+","+b+","+c+")"];
     var cl = c.length;
     var radomColor = color(c); //返回的随机颜色

    function color(c){

     for(var i = 0, len = arr.length ; i < len ; i++) {

        arr[i].style.background = "#FEA600";
    }

            return c[Math.floor(Math.random()*cl)];

      }

       arr[num1].style.background = radomColor;
       arr[num2].style.background = radomColor;
       arr[num3].style.background = radomColor;

};

start.onclick =  function(){
    clearInterval(time);
    time = setInterval(changeBg,1000);

  };

  

  function sto(){

    stop.style.background = "#FEA600";
    stop.style.color = "white";

 };

 function sto1(){

    stop.style.background = "white";
    stop.style.color = "#FEA600";

 };

 stop.onmouseover = function (){
          
          sto();

 };

 stop.onmouseleave = function (){

         sto1();

 };

 stop.onclick = function(){

      function randomNum(arr){

   return arr[Math.floor(Math.random()*l)];

   }

    for(var i = 0, len = arr.length ; i < len ; i++){

        arr[i].style.background = "#FEA600";

 }

  clearInterval(time);
 }

};
 
