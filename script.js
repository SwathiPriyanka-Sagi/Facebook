document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

   
    let firstName = document.getElementById("firstName").value.trim();
    let surname = document.getElementById("surname").value.trim();
    let dob = document.getElementById("dob").value;
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let gender = document.querySelector("input[name='gender']:checked");

    
    if (firstName === "" || surname === "" || dob === "" || email === "" || password === "" || !gender) {
        alert("Please fill all fields.");
        return;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters.");
        return;
    }

    alert("Sign-up successful!");
});