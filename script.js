




const start=document.getElementById("btn");  //target start downCount button


   start.addEventListener("click",function(e){        //starting down count whan click button


      const time=document.getElementById("stopWatch");            //target stopwatch
      const min_field=document.getElementById("min");
      
      let minutes=document.getElementById("minute").value;
      let hours=document.getElementById("hour").value;


      time.innerHTML=(minutes*60)+(hours*60*60);     //converting mins and hours to sec
      min_field.innerHTML=minutes;
      //get value from field and put in inner stopwatch  

      const myinterval=setInterval(downCountSec,1000);      
      //every sec call downCountSec function
      const myinterval2 =setInterval(downCountMin,60000);
      //every min call downCountMin function

      function downCountSec(){
         if(time.innerHTML==="0"){        //stop when you got 0       
            clearInterval(myinterval);
         }
        else
          time.innerHTML-=1;          //still decrease until 0
        }

        function downCountMin(){
         if(min_field.innerHTML==="0"){        //stop when you got 0       
            clearInterval(myinterval2);
         }
        else
          min_field.innerHTML-=1;          //still decrease until 0
        }
        
   }
);


