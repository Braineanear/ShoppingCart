// fade out for flash messages
setTimeout(function () {
  $("#flash-msg").fadeOut("slow");
}, 3000);

setTimeout(function () {
  $("#success").fadeOut("slow");
}, 3000);

setTimeout(function () {
  $("#error").fadeOut("slow");
}, 3000);

/*===== FOCUS =====*/
const inputs = document.querySelectorAll(".form__input")

/*=== Add focus ===*/
function addfocus(){
    let parent = this.parentNode.parentNode
    parent.classList.add("focus")
}

/*=== Remove focus ===*/
function remfocus(){
    let parent = this.parentNode.parentNode
    if(this.value == ""){
        parent.classList.remove("focus")
    }
}

/*=== To call function===*/
inputs.forEach(input=>{
    input.addEventListener("focus",addfocus)
    input.addEventListener("blur",remfocus)
})