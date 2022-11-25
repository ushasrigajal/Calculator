function run1(){
    document.getElementById("result").value += '1'
}
function run2(){
    document.getElementById("result").value += '2'
}
function run3() {
    document.getElementById("result").value+= '3'

}
function run4() {
    document.getElementById("result").value+= '4'

}
function run5() {
    document.getElementById("result").value+= '5'

}
function run6() {
    document.getElementById("result").value+= '6'

}
function run7() {
    document.getElementById("result").value+= '7'

}
function run8() {
    document.getElementById("result").value+= '8'

}
function run9() {
    document.getElementById("result").value+= '9'

}
function run0() {
    document.getElementById("result").value+= '0'

}
function empty(){
    document.getElementById("result").value = ' ' 
}
function precent() {
    document.getElementById("result").value+= '%'

}
function division() {
    document.getElementById("result").value+= '/'

}
function multiply() {
    document.getElementById("result").value+= '*'

}
function diff() {
    document.getElementById("result").value+= '-'

}
function add() {
    document.getElementById("result").value+= '+'

}
function dot(){
    document.getElementById("result").value+= '.'

}
function result(){
    var x = eval(document.getElementById("result").value)
    document.getElementById("result").value = x
}
function back(){
    var arr = document.getElementById("result").value
    document.getElementById("result").value = arr.slice(0,-1)
    
}
let input = document.getElementById("result")
input.addEventListener("keypress",function(event){
    if(event.key === "Enter"){
        result();

    }
})



