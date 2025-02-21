



const start=document.getElementById("btn");  //target start downCount button



   start.addEventListener("click",function(e){        //starting down count when click button

      const table=document.getElementById("study_table"); 

      const sec_field=document.getElementById("sec");            //target stopwatch
      const min_field=document.getElementById("min");

      const taskName=document.getElementById("task_field").value; //getting task descreption  

      let minutes=document.getElementById("minute").value;   //putting values in view box
      let hours=document.getElementById("hour").value;


      sec_field.innerHTML=(minutes*60)+(hours*60*60);     //converting mins and hours to sec
      min_field.innerHTML=minutes;
      //get value from field and put in inner stopwatch  

      const myinterval=setInterval(downCountSec,1000);      
      //every sec call downCountSec function
      const myinterval2 =setInterval(downCountMin,60000);
      //every minute call downCountMin function

     

      let task=document.createElement("tr"); //create task

      let time=document.createElement("td");
      let desc=document.createElement("td");
      time.innerHTML=minutes/60;      //asign values(time and descreption)
      desc.innerHTML=taskName;


      function downCountSec(){
         if(sec_field.innerHTML==="0"){        //stop when you got 0       
           
            clearInterval(myinterval);
              
            table.appendChild(task);   

            task.appendChild(time);
            task.appendChild(desc);

         }
        else
          sec_field.innerHTML-=1;          //still decrease until 0
        }

        function downCountMin(){
         if(min_field.innerHTML==="0"){        //stop when you got 0       
            clearInterval(myinterval2);
         }
        else
          min_field.innerHTML-=1;          //still decrease until 0
        }
        

        const stop=document.getElementById("btnStop");    //target cancel downCount buttosn
   
        stop.addEventListener("click",function(e){
   
           clearInterval(myinterval);
           clearInterval(myinterval2);

           sec_field.innerHTML="00";
           min_field.innerHTML="00";
     
        });

          

   }
 );



