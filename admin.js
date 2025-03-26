//this code for specfic login and is works

// console.log("admin.js is loaded correctly!"); // Debugging message

// document.addEventListener("DOMContentLoaded", function () {
//     const loginForm = document.querySelector(".login__form");

//     // ✅ Ensure the login form exists before adding an event listener
//     if (loginForm) {
//         loginForm.addEventListener("submit", function (event) {
//             event.preventDefault(); // Prevent default form submission

//             // Get user input
//             let email = document.getElementById("email").value;
//             let password = document.getElementById("password").value;

//             // Predefined admin credentials (Replace with backend validation later)
//             let adminEmail = "admin@example.com";
//             let adminPassword = "admin123";

//             // Check if credentials match
//             if (email === adminEmail && password === adminPassword) {
//                 alert("Admin Login Successful!");
                
//                 // Redirect after a short delay
//                 setTimeout(() => {
//                     window.location.replace("admindashboard.html");
//                 }, 1000);
//             } else {
//                 alert("Invalid credentials! Please try again.");
//             }
//         });
//     } else {
//         console.error("Login form not found! Check HTML structure.");
//     }

//     // ✅ Show/Hide Password Function
//     const togglePasswordVisibility = (inputId, iconId) => {
//         const input = document.getElementById(inputId);
//         const iconEye = document.getElementById(iconId);

//         if (input && iconEye) {
//             iconEye.addEventListener("click", () => {
//                 input.type = input.type === "password" ? "text" : "password";
//                 iconEye.classList.toggle("ri-eye-fill");
//                 iconEye.classList.toggle("ri-eye-off-fill");
//             });
//         }
//     };

//     // ✅ Apply Password Visibility Toggle
//     togglePasswordVisibility("password", "loginPassword");
//     togglePasswordVisibility("passwordCreate", "loginPasswordCreate");

//     // ✅ Toggle Between Login & Register Forms
//     const loginAccessRegister = document.getElementById("loginAccessRegister");
//     const buttonRegister = document.getElementById("loginButtonRegister");
//     const buttonAccess = document.getElementById("loginButtonAccess");

//     if (buttonRegister && buttonAccess && loginAccessRegister) {
//         buttonRegister.addEventListener("click", () => {
//             loginAccessRegister.classList.add("active");
//         });

//         buttonAccess.addEventListener("click", () => {
//             loginAccessRegister.classList.remove("active");
//         });
//     } else {
//         console.warn("Register/Login buttons not found. Skipping toggle functionality.");
//     }
// });

//this code for specfic login and is works


//march 25 admin any password works

console.log("admin.js is loaded correctly!"); // Debugging message

document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.querySelector(".login__form");

    // ✅ Ensure the login form exists before adding an event listener
    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent default form submission

            // Get user input
            let email = document.getElementById("email").value;
            let password = document.getElementById("password").value;

            // ✅ Basic email validation
            if (!email.includes("@") || password.length < 3) {
                alert("Enter a valid email and password.");
                return;
            }

            // ✅ Store credentials in localStorage (simulating persistence)
            localStorage.setItem("loggedInEmail", email);
            localStorage.setItem("loggedInPassword", password);

            alert("Login Successful!");

            // Redirect after a short delay
            setTimeout(() => {
                window.location.replace("admindashboard.html");
            }, 1000);
        });
    } else {
        console.error("Login form not found! Check HTML structure.");
    }

    // ✅ Auto-Login Check (Redirect if already logged in)
    const savedEmail = localStorage.getItem("loggedInEmail");
    if (savedEmail) {
        alert("Already logged in. Redirecting...");
        window.location.replace("admindashboard.html");
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
    } else {
        console.warn("Register/Login buttons not found. Skipping toggle functionality.");
    }
});
//march 25 admin any password works