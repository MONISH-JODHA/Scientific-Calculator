document.addEventListener("DOMContentLoaded", function(){
    console.log("document is ready");
    const display= document.getElementById("calc-display");
    const buttons= document.querySelectorAll(".btn");
    let currentvalue="";
       for (let i=0; i < buttons.length; i++){
        const button=buttons[i];
        button.addEventListener("click", function(){
            console.log("button clicked",button.innerText);
            const value=button.innerText;
            currentvalue+=value;
            display.value=currentvalue;
            
         })
    }
   
})