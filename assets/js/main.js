let body = document.getElementById('body')
let input = document.getElementById('input')

function enter(element) {
    input.value += element
}
function calc() {
    console.log("calc")
    input.value = Number(eval(input.value).toFixed(2))
    console.log(input.value)
}
function del() {
    console.log("del")
    input.value = input.value.slice(0, -1);
}
function clr() {
    console.log("clr")
    input.value = null
}
input.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault()
        document.getElementById("senden").click()
    }
})