document.addEventListener("DOMContentLoaded", function(){
    const display= document.getElementById("calc-display");
    const buttons= document.querySelector(".btn");
   
       for (let i=0; i < buttons.length; i++){
        const button=buttons[i];
        button.addEventListener("click", function(){
        console.log("button ",button.innerText)
         })
    }
   
})