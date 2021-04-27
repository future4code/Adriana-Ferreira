
/*1)
function printMessage() {
console.log("hi")
} 
printMessage()*/


//2)
    function locateInput() {  
    const myInput = document.getElementById("tarefa")   
} 

//3)
    function locateSelectValue() {  
    const theSelected = document.getElementById("dias-semana") 
} 

//4)
/*  function locateInput() {  
    const myInput = document.getElementById("tarefa")
    console.log(myInput.value)    
} 
    function locateSelectValue() {  
    const theSelected = document.getElementById("dias-semana")
    console.log(theSelected.value)    
} */

//5)

   locateInput.innerHTML = "<div>'${theSelected.value}'</div>"

//6)
    function locateInput() {  
    const myInput = document.getElementById("tarefa")
    myInput.innerHTML=""
} 


