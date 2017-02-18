
window.onload = function(){

   var arr = document.getElementsByTagName("li");//获取li的数组
   var len = arr.length;
   var start = document.getElementById("start");
   var stop = document.getElementById("stop");
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

             var num1 = 0;
             var num2 = 0;
             var num3 = 0;
             var color = new Array(3);
             // var num = new Array(3);
      //        for(var i =  0 ;i < num.length; i++ ){
      //             num[i]=Math.floor(Math.random()*len);
      //               console.log(num[i]);

      // }   

         for(var i = 0 ; i < len ; i++) {
               
               arr[i].style.background = "#FEA600";//方块颜色变为初始颜色
      }
        for(var i =  0 ; i < color.length; i++){
                  color[i]="rgb("+Math.floor(Math.random()*256)+','+Math.floor(Math.random()*256)+','+Math.floor(Math.random()*256)+")";
                    // console.log(color[i]);
      }   //使用for循环使数组获取三个随机的颜色
   
 function re(){
      num1 = Math.floor(Math.random()*len);
      num2 = Math.floor(Math.random()*len);
      num3 = Math.floor(Math.random()*len);
    if(num1 == num2 || num2 == num3 || num1 == num3){
      re();
    }

}
   re();
       arr[num1].style.background = color[0];
       arr[num2].style.background = color[1];
       arr[num3].style.background = color[2];
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

    for(var i = 0 ; i < len ; i++){

        arr[i].style.background = "#FEA600";

 }

  clearInterval(time);
 }

};
 
