document.addEventListener("DOMContentLoaded", function(){
    console.log("document is ready");
    const display= document.getElementById("calc-display");
    const buttons= document.querySelectorAll(".btn");
    let currentvalue="";
    function evaluate(){
        const newvalue=currentvalue.replace("×","*")
            .replace("÷","/").replace("%","*0.01");
        currentvalue=newvalue;
        const result=eval(currentvalue);
        currentvalue=result.toString();
        display.value=currentvalue;
    }

   
    
       for (let i=0; i < buttons.length; i++){
        const button=buttons[i];
        button.addEventListener("click", function(){
            console.log("button clicked",button.innerText);
            const valuee=button.innerText;

            
            if (valuee== "AC"){
                currentvalue="";
                display.value=currentvalue;
            }
            else if(valuee=="="){
                evaluate();
            }
            else{
                currentvalue+=valuee;
                display.value=currentvalue;
            }    
            
            
         })
    }
   
})