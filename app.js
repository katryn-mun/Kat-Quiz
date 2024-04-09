//Constants//
//define elements
const SUBMIT = document.getElementById("submit")
const GRADE = document.getElementById("grade")
const FORM = document.getElementById("firstQuestion")
const CORRECT_ANSWER = "katryn"

//create function to grade response
function rightOrWrong(event){
    event.preventDefault() //stops the refresh
    let RESPONSE = document.getElementById("response") //element
    const FIXED_RESPONSE = RESPONSE.value.toLowerCase() //change the VALUE to lowercase

    //control flow
    if(FIXED_RESPONSE === CORRECT_ANSWER){
        GRADE.innerHTML = "Correct!"
        RESPONSE.value = "" //change the VALUE of the element back to empty
    }
    else{
        GRADE.innerHTML="How could you get that wrong!"
        RESPONSE.value = "" //change the VALUE of the element back to empty
        }
}

//add event listener for submit, and trigger grading function.
//Another way to listen for an event.
//form.addEventListener("submit",rightOrWrong)
// SUBMIT.addEventListener("click",rightOrWrong)