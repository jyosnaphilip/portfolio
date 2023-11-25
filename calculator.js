function display(val) {
    document.getElementById("ans").value += val;


}


function blank() { 
    document.getElementById("ans").value = "";
} 

function cal(){
   document.getElementById("ans").value=eval(document.getElementById("ans").value);
}