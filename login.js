/*=============== SHOW HIDE PASSWORD LOGIN ===============*/
// const passwordAccess = (loginPass, loginEye) =>{
//     const input = document.getElementById(loginPass),
//           iconEye = document.getElementById(loginEye)
 
//     iconEye.addEventListener('click', () =>{
//        // Change password to text
//        input.type === 'password' ? input.type = 'text'
//                                        : input.type = 'password'
 
//        // Icon change
//        iconEye.classList.toggle('ri-eye-fill')
//        iconEye.classList.toggle('ri-eye-off-fill')
//     })
//  }
//  passwordAccess('password','loginPassword')
 
 /*=============== SHOW HIDE PASSWORD CREATE ACCOUNT ===============*/
//  const passwordRegister = (loginPass, loginEye) =>{
//     const input = document.getElementById(loginPass),
//           iconEye = document.getElementById(loginEye)
 
//     iconEye.addEventListener('click', () =>{
//        // Change password to text
//        input.type === 'password' ? input.type = 'text'
//                                        : input.type = 'password'
 
//        // Icon change
//        iconEye.classList.toggle('ri-eye-fill')
//        iconEye.classList.toggle('ri-eye-off-fill')
//     })
//  }
//  passwordRegister('passwordCreate','loginPasswordCreate')
 
 /*=============== SHOW HIDE LOGIN & CREATE ACCOUNT ===============*/
//  const loginAcessRegister = document.getElementById('loginAccessRegister'),
//        buttonRegister = document.getElementById('loginButtonRegister'),
//        buttonAccess = document.getElementById('loginButtonAccess')
 
//  buttonRegister.addEventListener('click', () => {
//     loginAcessRegister.classList.add('active')
//  })
 
//  buttonAccess.addEventListener('click', () => {
//     loginAcessRegister.classList.remove('active')
//  })





 //march 9


//  document.addEventListener("DOMContentLoaded", function () {
//    document.querySelector(".login__form").addEventListener("submit", function (event) {
//        event.preventDefault(); // Prevent default form submission

//        // Get email and password from input fields
//        let email = document.getElementById("email").value;
//        let password = document.getElementById("password").value;

//        // Dummy credentials (Replace with backend authentication later)
//        let validEmail = "user@example.com";
//        let validPassword = "password123";

//        // Check if credentials match
//        if (email === validEmail && password === validPassword) {
//            alert("Login successful! Redirecting...");
//        } else {
//            alert("Invalid email or password! But redirecting anyway...");
//        }

//        // Redirect to index.html regardless of validation
//        window.location.href = "index.html"; 
//    });
// });


 //march 9




 //march 9
 document.addEventListener("DOMContentLoaded", function () {
    console.log("✅ login.js is loaded correctly!"); 

    // ✅ Handle User Registration
    const registerForm = document.querySelector(".register__form");
    if (registerForm) {
        registerForm.addEventListener("submit", function (event) {
            event.preventDefault(); 

            let newEmail = document.getElementById("emailCreate").value;
            let newPassword = document.getElementById("passwordCreate").value;

            if (!newEmail || !newPassword) {
                alert("⚠ Please fill in all fields!");
                return;
            }

            if (localStorage.getItem(newEmail)) {
                alert("⚠ An account with this email already exists. Please log in.");
                return;
            }

            let userData = { email: newEmail, password: newPassword };
            localStorage.setItem(newEmail, JSON.stringify(userData));

            alert("✅ Account created successfully! You can now log in.");
        });
    }

    // ✅ Handle User Login
    const loginForm = document.querySelector(".login__form");
    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault(); 

            let email = document.getElementById("email").value;
            let password = document.getElementById("password").value;

            let storedData = localStorage.getItem(email);

            if (!storedData) {
                alert("⚠ You haven't created an account. Please create one.");
                return;
            }

            let userData = JSON.parse(storedData);

            if (email === userData.email && password === userData.password) {
                alert("✅ Login successful! Redirecting...");
                localStorage.setItem("isUserLoggedIn", "true");
                localStorage.setItem("currentUser", email);
                setTimeout(() => {
                    window.location.href = "userdashboard.html"; 
                }, 1000);
            } else {
                alert("❌ Invalid email or password! Please try again.");
            }
        });
    }

    // ✅ Redirect User if Not Logged In
    if (window.location.pathname.includes("userdashboard.html") && localStorage.getItem("isUserLoggedIn") !== "true") {
        alert("⚠ You must log in first!");
        window.location.href = "login.html";
    }

    // ✅ Logout Functionality
    const logoutButton = document.getElementById("logoutButton");
    if (logoutButton) {
        logoutButton.addEventListener("click", function () {
            localStorage.removeItem("isUserLoggedIn"); 
            localStorage.removeItem("currentUser"); 
            alert("✅ Logged out successfully!");
            window.location.href = "login.html"; 
        });
    }

    // ✅ Show/Hide Password Function
    const togglePasswordVisibility = (inputId, iconId) => {
        const input = document.getElementById(inputId);
        const iconEye = document.getElementById(iconId);

        if (input && iconEye) {
            iconEye.addEventListener("click", () => {
                input.type = input.type === "password" ? "text" : "password";
                iconEye.classList.toggle("ri-eye-fill");
                iconEye.classList.toggle("ri-eye-off-fill");
            });
        }
    };

    // ✅ Apply Password Visibility Toggle
    togglePasswordVisibility("password", "loginPassword");
    togglePasswordVisibility("passwordCreate", "loginPasswordCreate");

    // ✅ Toggle Between Login & Register Forms
    const loginAccessRegister = document.getElementById("loginAccessRegister");
    const buttonRegister = document.getElementById("loginButtonRegister");
    const buttonAccess = document.getElementById("loginButtonAccess");

    if (buttonRegister && buttonAccess && loginAccessRegister) {
        buttonRegister.addEventListener("click", () => {
            loginAccessRegister.classList.add("active");
        });

        buttonAccess.addEventListener("click", () => {
            loginAccessRegister.classList.remove("active");
        });
    }
});


 //march 9