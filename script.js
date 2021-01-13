
// window.onload = () =>{
//     addLIstener()

// }

var buttonArrey = document.getElementsByTagName('button')
var inputFiled = document.getElementById("inputElement")
var inputFiled2 = document.getElementById("inputElement2")


for (const btnElements of buttonArrey) {
btnElements.addEventListener("load",onclick=function() {
        inputFiled2.value = eval(inputFiled.value)
    }) 

    btnElements.addEventListener("click",function() {
        if (this.innerHTML == "=") {
            inputFiled.value = eval(inputFiled.value) 
            
            
        }
        else if (this.innerHTML == "AC") {
            inputFiled.value = "";
        } else {
            inputFiled.value += this.innerHTML;
        }
    })
}
