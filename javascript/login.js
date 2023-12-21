function login() {
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;
	var loginMessage = document.getElementById("loginMessage");
  
	if (username === "user" && password === "pass") {
	  loginMessage.style.color = "green";
	  loginMessage.textContent = "Login successful!";
	} else {
	  loginMessage.style.color = "red";
	  loginMessage.textContent = "Invalid username or password. Please try again.";
	}
  }
 
	