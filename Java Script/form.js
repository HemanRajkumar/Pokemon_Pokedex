function validateName(){
    const name = document.getElementById("name").value;
    const nameInput = document.getElementById("name");
    const nameMessage = document.getElementById("nameMessage");
    if (name.length>=3){
        nameInput.style.borderColor = "green";
        nameMessage.textContent = "Name looks good";
        nameMessage.style.color = "green";
        nameMessage.style.marginBottom = "10px";
        
        return true;
    }
    else{
        nameInput.style.borderColor = "red";
        nameMessage.textContent = "Name should at least be of 3 characters";
        nameMessage.style.color = "red";
        nameMessage.style.marginBottom = "10px";
        return false;
        
    }
    
}
function validateEmail(){
    const email = document.getElementById("email").value;
    const emailInput = document.getElementById("email");
    const emailMessage = document.getElementById("emailMessage");
    const emailPattern =  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    
    if (emailPattern.test(email)){
        emailInput.style.borderColor = "green";
        emailMessage.textContent = "Valid Email";
        emailMessage.style.color = "green";
        emailMessage.style.marginBottom = "10px";
        return true;
    }
    else{
        emailInput.style.borderColor = "red";
        emailMessage.textContent = "Enter a valid Email Address";
        emailMessage.style.color = "red";
        emailMessage.style.marginBottom = "10px";
        return false;
        
    }

}
function validateFeedback(){
    const feedback = document.getElementById("feedback").value;
    const feedbackInput = document.getElementById("feedback");
    const feedbackMessage = document.getElementById("feedbackMessage");
    const words = feedback.trim().split(/\s+/).filter(word => word.length > 0);
    if (words.length >= 3) {
        feedbackInput.style.borderColor = "green";
        feedbackMessage.textContent = "Feedback looks good";
        feedbackMessage.style.color = "green";
        feedbackMessage.style.marginBottom = "10px";
        return true;
    }
    else{
        feedbackInput.style.borderColor = "red";
        feedbackMessage.textContent = "Feedback should be at least 3 words long";
        feedbackMessage.style.color = "red";
        feedbackMessage.style.marginBottom = "10px";
        return false;
    }
}
function validateForm() {
    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isFeedbackValid = validateFeedback();

    if (isNameValid && isEmailValid && isFeedbackValid) {

        alert("Submitted successfully!");
        window.location.href = "index.html";
        return true; 
    } else {
        alert("Please fix the errors in the form before submitting."); 
        return false; 
    }
}
